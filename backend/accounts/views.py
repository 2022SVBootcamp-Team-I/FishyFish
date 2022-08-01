import jwt
import bcrypt
from django.shortcuts import render, redirect, get_object_or_404
from .models import User
from rest_framework.views import APIView
from django.views import View
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from django.contrib.auth import authenticate
from drf_yasg.utils import swagger_auto_schema


#from rest_framework.generics import ListCreateAPIView
from .serializers import *

class Unique(APIView):
    @swagger_auto_schema(operation_id="이메일 중복 확인")
    def post(self, request):
        data = request.data
        if User.objects.filter(email = data['email']).exists():
            return Response({"message": "이메일이 존재합니다"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "이 이메일은 사용 가능합니다"}, status=status.HTTP_200_OK)

class Register(APIView):
    @swagger_auto_schema(operation_id="회원가입")
    def post(self, request):
        data = request.data
        if data['password'] != data['password2']:
            return Response({"message": "비밀번호가 일치하지 않습니다"},status=status.HTTP_400_BAD_REQUEST)
        content = {
            "email": data['email'],
            "password": bcrypt.hashpw(data['password'].encode("utf-8"), bcrypt.gensalt()).decode("utf-8"),
            "username": data['username']
        }
        serializer = UserSerializer(data=content)
        if serializer.is_valid():
            user = serializer.save()
            token = TokenObtainPairSerializer.get_token(user)
            refresh_token = str(token)
            access_token = str(token.access_token)
            response = Response(
                {
                    "user": serializer.data,
                    "message": "register successs",
                    "token": {
                        "access": access_token,
                        "refresh": refresh_token,
                    },
                },
                status=status.HTTP_201_CREATED,
            )
            
            return response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Login(APIView):
    @swagger_auto_schema(operation_id="가입된 유저들 조회")
    def get(self, request):
        user = User.objects.values()
        return Response({"list" : list(user)}, status = 200)

    @swagger_auto_schema(operation_id="로그인 (토큰 쿠키에 저장)")
    def post(self, request):
        data = request.data
        if User.objects.filter(email = data['email']).exists() :
                user = User.objects.get(email = data['email'])
                if bcrypt.checkpw(data['password'].encode('utf-8'), user.password.encode('utf-8')) :
                    serializer = UserSerializer(user)
                    token = TokenObtainPairSerializer.get_token(user)
                    refresh_token = str(token)
                    access_token = str(token.access_token)
                    response = Response(
                        {
                            "user": serializer.data,
                            "message": "login success",
                            "token": {
                                "access": access_token,
                                "refresh": refresh_token,
                            },
                        },
                        status=status.HTTP_200_OK,
                    )
                    response.set_cookie("access", access_token, httponly=True)
                    response.set_cookie("refresh", refresh_token, httponly=True)
                    return response
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "존재하지 않는 계정입니다."}, status=status.HTTP_400_BAD_REQUEST)

class Logout(APIView):
        @swagger_auto_schema(operation_id="로그아웃 (토큰 쿠키에서 삭제)")
        def post(self, request):
            data = request.data
            user = User.objects.get(email = data['email'])
            token = TokenObtainPairSerializer.get_token(user)
            response = Response(
                        {
                            "message": "success",
                        },
                        status=status.HTTP_200_OK,
            )
            response.delete_cookie("access")
            response.delete_cookie("refresh")
            return response