from django.urls import path, include
from .api import DiscussionMainAPI, MessagingAPI, NewDiscussionAPI

urlpatterns = [
    path('api/discussion/', DiscussionMainAPI.as_view()),
    path('api/discussion/<int:id>', MessagingAPI.as_view()),
    path('api/newdiscussion/', NewDiscussionAPI.as_view()),
    #path('api/discussionuser/', NewDiscussionUserAPI.as_view()),
]
