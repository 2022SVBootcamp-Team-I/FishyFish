from django.urls import path
from . import views

urlpatterns = [
    #path('', views.Image_view.as_view()),
    path('images/', views.Image_view.as_view(), name = 'images'), # 이미지 업로드 
    path('myfish/', views.myFishList.as_view(), name='myfish'), # myfish list
]