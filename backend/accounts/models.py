from django.db import models

# Create your models here.

class Users(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)
    last_log = models.DateTimeField(auto_now=True)

    class Meta:             
        ordering = ['-date']
        
    def __str__(self):
        return self.username
