from rest_framework import serializers
from teami.models import *

class fishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = ['name', 'toxicity', 'prohibit_period', 'prohibit_area', 'description']

class imageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'url', 'fish']
    
class getMyFishSerializer(serializers.ModelSerializer):
    fish = fishSerializer(read_only=True)
    class Meta:
        model = Image
        fields = ['url', 'fish','id']