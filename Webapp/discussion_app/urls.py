from rest_framework import routers
from .api import MessageApi

router = routers.DefaultRouter()
router.register('api/message', MessageApi, 'messages')


urlpatterns = router.urls
