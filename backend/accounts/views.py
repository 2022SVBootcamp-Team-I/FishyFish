import json
from django.shortcuts import render, redirect
from .models import Users
from rest_framework.views import APIView
from django.views import View
from rest_framework.response import Response
from rest_framework import status

#from rest_framework.generics import ListCreateAPIView
from .serializers import UsersSerializer

class Register(APIView):

    def post(self, request):
        user = Users.objects,all()
        content = { 'username' : user.username, 
                    'password' : user.password,
                    'email'    : user.email,
            }
        serializers = UsersSerializer(data = content)

        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user = Users.objects.values()
        return Response({'users' : list(user)}, status=200)

class Login(View):
    def post(self, request):
        data = json.loads(request.body)
        Users(
            username=data['username'],
            password=data['password'],
            email=data['email']
        )

        if Users.objects.filter(username = data['username'], password = data['password']).exists() == True :
            return Response({"message": "로그인에 성공하셨습니다."}, status = 200)
        else:
            return Response({"message" : "아이디나 비밀번호가 일치하지 않습니다."}, status = 401)

    def get(self, request):
        user = Users.objects.values()
        return Response({"list" : list(user)}, status = 200)