from django.shortcuts import render, redirect, get_object_or_404
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from teami.models import Image, Fish, User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema
from environments import get_secret
from PIL import Image as PILImage
import jwt
import sys
import uuid
import io
from .tasks import fish_ai
from .serializer import *
sys.path.append('..')

class imageView(APIView):
    # 이미지 업로드
    @swagger_auto_schema(operation_id="이미지 업로드")
    def post(self, request):
        user_token = jwt.decode(request.COOKIES.get("access"), get_secret("SECRET_KEY"), algorithms=['HS256'])
        userId = user_token['user_id']
        if userId is None:
            return Response({"message":"로그인 후 이용 가능합니다."}, status=status.HTTP_400_BAD_REQUEST)
        image = Image()
        image.url = request.FILES.get('uploadImage')
        
        file_name = str(uuid.uuid4())  
        imageByte = io.BytesIO()
        image_file = PILImage.open(image.url)
        image_file.save(imageByte, 'png')
        imageByte.seek(0)
        result_url = ContentFile(imageByte.read(), f'{file_name}.png')
        image.url = result_url
        image.user_id = userId
        image.save()

        fish_id = fish_ai.delay(image.url.url).get()
        image.fish = Fish.objects.get(id=fish_id)
        image.save()
        fish = image.fish
        content = {
            'url': image.url.url, #사진
            'name': fish.name, #이름
            'toxicity':fish.toxicity,
            'prohibit_period': fish.prohibit_period,
            'prohibit_area': fish.prohibit_area,
            'description': fish.description
        }
        return Response(content, status=status.HTTP_201_CREATED)

class myFishList(APIView):
    # 사용자가 저장한 이미지 확인
    @swagger_auto_schema(operation_id="사용자가 저장한 이미지 확인")
    def get(self, request):
        if request.COOKIES.get("access") is None:
            return Response({"message":"로그인 후 이용 가능합니다."}, status=status.HTTP_400_BAD_REQUEST)
        user_token = jwt.decode(request.COOKIES.get("access"),get_secret("SECRET_KEY"), algorithms=['HS256'])
        userId = user_token['user_id']
        images = Image.objects.filter(user_id=userId)
        serializer = getMyFishSerializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 특정 사진 조회
    @swagger_auto_schema(operation_id="특정 사진 조회")
    def post(self, request):
        if request.COOKIES.get("access") is None:
            return Response({"message":"로그인 후 이용 가능합니다."}, status=status.HTTP_400_BAD_REQUEST)
        user_token = jwt.decode(request.COOKIES.get("access"),get_secret("SECRET_KEY"), algorithms=['HS256'])
        userId = user_token['user_id']
        images = Image.objects.filter(user_id=userId)
        image_id = request.POST['image_id']
        image = images.get(id=image_id)
        fish = Fish.objects.get(id=image.fish_id)
        result = {
            'url': image.url.url, 
            'name': fish.name,
            'toxicity': fish.toxicity,
            'prohibit_period': fish.prohibit_period,
            'prohibit_area': fish.prohibit_area,
            'description': fish.description
        }
        return Response(result, status=status.HTTP_200_OK)

    # 이미지 삭제
    @swagger_auto_schema(operation_id="특정 이미지 삭제")
    def delete(self, request):
        if request.COOKIES.get("access") is None:
            return Response({"message":"로그인 후 이용 가능합니다."}, status=status.HTTP_400_BAD_REQUEST)
        user_token = jwt.decode(request.COOKIES.get("access"),get_secret("SECRET_KEY"), algorithms=['HS256'])
        userId = user_token['user_id']
        images = Image.objects.filter(user_id=userId)
        image_id = request.POST['image_id']
        image = images.get(id=image_id)
        image.delete()
        return Response({"message": "delete successs"}, status=status.HTTP_204_NO_CONTENT)
