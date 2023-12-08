from rest_framework import viewsets, permissions
from .serializers import MessageSerializer, DiscussionSerializer
from .models import Message, Discussion
from rest_framework.response import Response
from rest_framework import status

class MessageApi(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    def send_message(self, request, *args, **kwargs):
        data = request.data.copy()
        data['created_by'] = request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
class DiscussionAPI(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = DiscussionSerializer
    queryset = Discussion.objects.all()

    def create_discussion(self, request, *args, **kwargs):
        data = request.data.copy()
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)