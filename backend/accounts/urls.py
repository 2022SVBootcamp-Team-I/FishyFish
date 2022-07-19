from django.urls import path
from . import views

app_name = "accounts"
urlpatterns = [
    path('register/', views.signup, name='register'),
    path('login/', views.signup, name='login'),
    path('logout/', views.signup, name='logout'),
]