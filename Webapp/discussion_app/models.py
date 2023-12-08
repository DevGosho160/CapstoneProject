from django.db import models
from django.contrib.auth.models import User

class Discussion(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    message = models.TextField(max_length=300, blank=True)
    discussion = models.ForeignKey(Discussion, on_delete=models.CASCADE, null=True)