from django.shortcuts import render, redirect, get_object_or_404
from .models import Image, Fish, User
from django.http.response import JsonResponse
from django.utils import timezone
import boto3
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializer import *

# url: images/
class Image_view(APIView):
    # 이미지 업로드
    def post(self, request):
        user = request.user
        image = Image() 
        image.image_url = request.FILES.get('image_url')
        content = {
            'image_url': image.image_url,
            'user_id': user.id,
            'fish': 1
        }
        # 이미지 정보 저장
        serializers = imageSerializer(data = content)
        if serializers.is_valid():
            serializers.save()
        else:
            Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
            
        fish = Fish.objects.get(id = serializers.data.get('fish'))
        # 리턴 값
        content = {
            'image_url': serializers.data.get('image_url'), 
            'name': fish.name,
            'toxicity':fish.toxicity,
            'prohibit_period': fish.prohibit_period,
            'prohibit_area': fish.prohibit_area,
            'description': fish.description
        }
        return Response(content, status=status.HTTP_201_CREATED)
       

     
class myFishList(APIView):
    # 사용자가 저장한 이미지 확인
    def get(self, request):
        user = request.user
        images = Image.objects.filter(user_id = user.id)
        serializer = getMyFishSerializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 특정 사진 조회
    def post(self, request):
        user = request.user
        images = Image.objects.filter(user_id = user.id)
        image_id = request.POST['image_id']
        image = images.get(id = image_id)
        serializer = imageSerializer(image)
        fish = Fish.objects.get(id = serializer.data.get('fish'))
        content = {
            'image_url': serializer.data.get('image_url'), 
            'name': fish.name,
            'toxicity':fish.toxicity,
            'prohibit_period': fish.prohibit_period,
            'prohibit_area': fish.prohibit_area,
            'description': fish.description
        }
        return Response(content, status=status.HTTP_200_OK)

    # 이미지 삭제
    def delete(self, request):
        pass