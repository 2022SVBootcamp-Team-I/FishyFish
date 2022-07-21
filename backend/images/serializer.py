from rest_framework import serializers
from .models import *

class photoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image_url', 'user_id', 'fish']