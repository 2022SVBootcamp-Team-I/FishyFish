from django.urls import path
from .views import Register, Login, Logout, Unique

app_name = "accounts"
urlpatterns = [
    path('api/v1/register/', Register.as_view(), name='register'),
    path('api/v1/login/', Login.as_view(), name='login'),
    path('api/v1/logout/', Logout.as_view(), name='logout'),
    path('api/v1/check-email/', Unique.as_view(), name='check_email'),
]