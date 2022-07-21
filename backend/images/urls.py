from django.urls import path
from . import views

urlpatterns = [
    path('', views.Image_view.as_view()),
    path('images/', views.Image_view.as_view(), name = 'images'),
    path('myfish/<int:user_id>', views.myFishList.as_view(), name='myfish')
]