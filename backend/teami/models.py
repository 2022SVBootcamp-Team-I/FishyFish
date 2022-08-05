from . import settings
from django.db import models
from django.contrib.auth.models import User
import uuid
from django_prometheus.models import ExportModelOperationsMixin

class User(models.Model):
    email = models.EmailField(max_length=150, null=False, unique=True)
    password = models.CharField(max_length=255, null=False)
    username = models.CharField(max_length=50, null=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'user'

class Fish(ExportModelOperationsMixin("fish"), models.Model):
    name = models.CharField(max_length=20)
    toxicity = models.CharField(max_length=20)
    prohibit_period = models.CharField(max_length=50)
    prohibit_area = models.CharField(max_length=50)
    description = models.TextField()

    class Meta:
        db_table = 'fish'

class Image(models.Model):
    url = models.ImageField(upload_to='')
    create_date = models.DateTimeField(auto_now_add=True)
    fish = models.ForeignKey(Fish, related_name='fish_id', on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, related_name='user_id', on_delete=models.CASCADE)

    class Meta:
        db_table = 'image'