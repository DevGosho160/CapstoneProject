from django.urls import path, include
from .api import DiscussionMainAPI, MessagingAPI, NewDiscussionAPI, NewDiscussionUserAPI

urlpatterns = [
    path('api/discussion/', DiscussionMainAPI.as_view()),
    path('api/message', MessagingAPI.as_view()),
    path('api/newdiscussion/', NewDiscussionAPI.as_view()),
    path('api/discussionuser/', NewDiscussionUserAPI.as_view()),
]
