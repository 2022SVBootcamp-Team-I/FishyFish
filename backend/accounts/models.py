from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50, null=False, unique=True)
    password = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=150, null=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:             
        ordering = ['-date_created']
        db_table = 'accounts_user'
