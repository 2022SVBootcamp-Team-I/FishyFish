from django.db import models

# Create your models here.

class Users(models.Model):
    username = models.CharField(max_length=50, null=False)
    password = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=50, null=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_logged = models.DateTimeField(auto_now=True)

    class Meta:             
        ordering = ['-date_created']
