from rest_framework import serializers
from teami.models import *

class fishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = ['name']

class imageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['user_id', 'url']
    
class getMyFishSerializer(serializers.ModelSerializer):
    fish = fishSerializer(read_only=True)
    class Meta:
        model = Image
        fields = ['url', 'fish']