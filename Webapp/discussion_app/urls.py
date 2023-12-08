from rest_framework import routers
from .api import MessageApi, DiscussionAPI

router = routers.DefaultRouter()
router.register('api/message', MessageApi, 'messages')
router.register('api/discussions', DiscussionAPI, 'discussions')

urlpatterns = router.urls
