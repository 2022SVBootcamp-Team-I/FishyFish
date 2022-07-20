from django.shortcuts import render, redirect

# Create your views here.
from django.contrib.auth.models import User
from django.contrib import auth
from rest_framework import generics
from .serializers import UsersSerializer
from .models import Users

"""
def signup(request):
    if request.method == "POST":
        user = User.objects.create_user(
            username=request.POST["username"],password=request.POST["password"]
        )
        auth.login(request,user)
        return redirect('home')
    return render(request, 'register')

def login(request):
    return render(request, 'login')
"""
class UsersListCreate(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer