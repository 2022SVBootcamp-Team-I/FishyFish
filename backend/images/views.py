from django.shortcuts import render, redirect, get_object_or_404
from .models import Image, Fish_info, User
from django.utils import timezone
import boto3
# from ./teami/settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializer import *

class Image_view(APIView):
    # 이미지 업로드
    def post(self, request):
        image = Image()
        image.image_url = request.FILES.get('image_url')
        content = {
            'image_url': image.image_url,
            'user_id': 1,
            'fish': 1
        }
        serializers = photoSerializer(data = content)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # 전체 이미지 조회
    def get(self, request):
        users_image = Image.objects.all()
        if not users_image:
             return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer = photoSerializer(users_image, many = True)
        return Response(serializer.data)


    
