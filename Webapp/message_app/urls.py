from django.urls import path

from .views import discussionView, messageView

urlpatterns = [
    path('discussion/', discussionView, name = "createDiscussion"),
    path('discussion/<int:di>/', messageView, name = "discussion"),
]