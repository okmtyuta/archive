from django.urls import path
from . import views
from rest_framework import routers
from .views import ArticleViewSet


router = routers.DefaultRouter()
router.register('article', ArticleViewSet)
