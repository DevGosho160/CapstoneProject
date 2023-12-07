from rest_framework import serializers
from .models import Discussion, Message, DiscussionUser
from django.contrib.auth.models import User

#Serializer for Discussions
class DiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discussion
        fields = ['__all__']

#Serializer for Messages
class MessageSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Message
        fields = ['__all__']

#Serializes the connection between users and discussions
#class DiscussionUserSerializer(serializers.ModelSerializer):
#    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
#    
#    class Meta:
#        model = DiscussionUser
#        fields = ['__all__']
