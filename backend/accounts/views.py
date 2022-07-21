from django.shortcuts import render, redirect

# Create your views here.
from django.contrib.auth.models import User
from django.contrib import auth
from rest_framework.generics import ListCreateAPIView
from .serializers import UsersSerializer
from .models import Users


from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User # 장고가 주는 User 모델 
"""
from django.contrib.auth import authenticate, login


def signup(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)  # 사용자 인증
            login(request, user)  # 로그인
            return redirect('index')
    else:
        form = UserForm()
    return render(request, 'common/signup.html', {'form': form})
"""
class Register(ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    #def post(self, request):
        #user = Users()


class Login(ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer