from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Message, Discussion

class MessageSerializer(ModelSerializer):
    user = SerializerMethodField("get_name")
    class Meta:
        model = Message
        fields = '__all__'
    def get_name(self, obj):
        return obj.user.username

class DiscussionSerializer(ModelSerializer):
    class Meta:
        model = Discussion
        fields = '__all__'