from django.db import models
from django.contrib.auth.models import User

class Fish(models.Model):
    name = models.CharField(max_length = 20)
    toxicity = models.BooleanField()
    prohibit_period = models.CharField(max_length=50)
    prohibit_area = models.CharField(max_length=50)
    description = models.TextField()

# Create your models here.
class Image(models.Model):
    url = models.ImageField(upload_to='image')
    create_date = models.DateTimeField(auto_now_add=True)
    fish = models.ForeignKey(Fish, related_name = 'fish_id', on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, related_name = 'user_id',on_delete =models.CASCADE)