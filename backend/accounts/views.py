import jwt
import bcrypt
from django.shortcuts import render, redirect, get_object_or_404
from .models import Users
from rest_framework.views import APIView
from django.views import View
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from django.contrib.auth import authenticate


#from rest_framework.generics import ListCreateAPIView
from .serializers import *

class Register(APIView):
    def post(self, request):
        data = request.data
        if data['password'] != data['password2']:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        content = {
            "username": data['username'],
            "password": bcrypt.hashpw(data['password'].encode("utf-8"), bcrypt.gensalt()).decode("utf-8"),
            "email": data['email']
        }
        serializer = UsersSerializer(data=content)
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
                status=status.HTTP_200_OK,
            )
            
            # jwt 토큰 => 쿠키에 저장
            response.set_cookie("access", access_token, httponly=True)
            response.set_cookie("refresh", refresh_token, httponly=True)
            
            return response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user = Users.objects.values()
        return Response({'users' : list(user)}, status=200)

class Login(APIView):
    def get(self, request):
        user = Users.objects.values()
        return Response({"list" : list(user)}, status = 200)

    def post(self, request):
        data = request.data
        if Users.objects.filter(username = data['username']).exists() :
                user = Users.objects.get(username = data['username'])
                if bcrypt.checkpw(data['password'].encode('utf-8'), user.password.encode('utf-8')) :
                    serializer = UsersSerializer(user)
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
                    return response
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "존재하지 않는 계정"}, status=status.HTTP_400_BAD_REQUEST)