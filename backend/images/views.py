from django.shortcuts import render, redirect, get_object_or_404
from teami.models import Image, Fish, User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializer import *
from drf_yasg.utils import swagger_auto_schema
import jwt
import sys
from django.core.files.storage import default_storage
sys.path.append('..')
from environments import get_secret


class imageView(APIView):
    # 이미지 업로드
    @swagger_auto_schema(operation_id="이미지 업로드")
    def post(self, request):
        user_token = jwt.decode(request.COOKIES.get("access"),get_secret("SECRET_KEY"), algorithms=['HS256'])
        userId = user_token['user_id']
        if userId is None:
            return Response({"message":"로그인 후 이용 가능합니다."}, status=status.HTTP_400_BAD_REQUEST)
        image = Image()
        image.url = request.FILES.get('url')
        content = {
            'url': image.url,
            'user_id': userId,
            'fish': 1
        }
        # 이미지 정보 저장
        serializers = imageSerializer(data=content)
        if serializers.is_valid():
            serializers.save()
        else:
            Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
            
        fish = Fish.objects.get(id=serializers.data.get('fish'))
        # 리턴 값
        content = {
            'url': serializers.data.get('url'), 
            'name': fish.name,
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
        serializer = imageSerializer(image)
        fish = Fish.objects.get(id=serializer.data.get('fish'))
        content = {
            'url': serializer.data.get('url'), 
            'name': fish.name,
            'toxicity': fish.toxicity,
            'prohibit_period': fish.prohibit_period,
            'prohibit_area': fish.prohibit_area,
            'description': fish.description
        }
        return Response(content, status=status.HTTP_200_OK)

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
