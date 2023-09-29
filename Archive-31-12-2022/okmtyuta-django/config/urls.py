from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from article.urls import router as article_router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(article_router.urls)),
]