from django.urls import path
from . import views

urlpatterns = [
    path('api/v1/images/', views.imageView.as_view(), name = 'images'), # 이미지 업로드 
    path('api/v1/myfish/', views.myFishList.as_view(), name='myfish'), # myfish list
]