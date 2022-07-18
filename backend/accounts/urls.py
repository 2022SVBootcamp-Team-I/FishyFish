from django.urls import path
from . import views

app_name = "accounts"
urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.signup, name='login'),
    path('logout/', views.signup, name='logout'),
]