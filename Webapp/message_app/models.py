from django.db import models
from django.contrib.auth.models import User

class Discussion(models.Model):
    title = models.CharField(max_length=100, blank=False)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    created_at = models.DateField(auto_now_add=True)
    def __str__(self):
        return str(self.name)
    
class Message(models.Model):
    di = models.ForeignKey(Discussion, on_delete=models.CASCADE, blank=False, related_name="discussion")
    uid = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, related_name="sender")
    msg = models.TextField(blank=True)
    date = models.DateTimeField(auto_now_add=True)

class DU(models.Model):
    di = models.ForeignKey(Discussion, on_delete=models.CASCADE, blank=False, related_name="discuss")
    uid = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, related_name="participant")