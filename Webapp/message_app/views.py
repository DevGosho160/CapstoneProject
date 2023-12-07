from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import JsonResponse
from django.contrib.auth.models import User
import json
from .models import Message, Discussion, DU
from .serializers import MessageSerializer, DiscussionSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def discussionView(request):
    if request.method == "GET":
        discuss = Discussion.objects.all()
        serializer = DiscussionSerializer(discuss, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        user = request.user
        try:
            title = request.data.get('title')
        except:
            title = ""
        newDiscuss = Discussion.objects.create(created_by=user, title=title)
        newDiscuss.save()
        return JsonResponse({"status": "201"})

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def messageView(request, title):
    if request.method == "GET":
        discuss = Discussion.objects.get(title=title)
        msgs = reversed(discuss.di.all())
        serializer = MessageSerializer(msgs, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        discuss = Discussion.objects.get(title=title)
        user = request.user
        try:
            message = request.data.get('msg')
        except:
            message = ""
        newMsg = Message.objects.create(di=discuss, uid=user, msg=message)
        newMsg.save()
        return JsonResponse({"status": "201"})