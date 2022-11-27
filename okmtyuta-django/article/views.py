from django.shortcuts import render
from .models import Article
from rest_framework import viewsets, filters
from .serializer import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all() # 全てのデータを取得
    serializer_class = ArticleSerializer