from django.urls import path
from .views import Register, Login, Logout

app_name = "accounts"
urlpatterns = [
    path('api/v1/register/', Register.as_view(), name='register'),
    path('api/v1/login/', Login.as_view(), name='login'),
    path('api/v1/logout/', Logout.as_view(), name='logout'),
]