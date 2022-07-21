from django.urls import path
from . import views

app_name = "accounts"
urlpatterns = [
    #path('register/', views.signup, name='register'),
    path('', views.Register.as_view()),
    path('register/', views.Register.as_view()),
    path('login/', views.Login.as_view()),
    
]