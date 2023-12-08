from rest_framework import serializers
from .models import Message, Discussion

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class DiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discussion
        fields = '__all__'