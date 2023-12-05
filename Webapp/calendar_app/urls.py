from django.urls import path, include
from .api import CalendarViewAPI, CreateEventAPI, CancelEventAPI

urlpatterns = [
  path('api/', CalendarViewAPI.as_view()),
  path('api/create', CreateEventAPI.as_view()),
  path('api/cancel', CancelEventAPI.as_view()),
]