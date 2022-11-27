from email.policy import default
from django.db import models
from django.utils import timezone
import uuid

class Article(models.Model):
    title = models.CharField('タイトル', max_length=100, default="untitled")  # 記事のタイトル
    thumbnail = models.ImageField(upload_to='uploads/%Y/%m/%d/', default="materials/NontalonLogo.png")  # 記事のサムネイル
    caption = models.CharField('Caption', max_length=120, default="")  # 記事のサムネイルのキャプション
    author = models.CharField(max_length=255, default="anonymous")  # 記事の作者
    description = models.TextField()  # 記事の概要
    body = models.TextField(default="")  # 記事の内容
    is_public = models.BooleanField('Public Article?', default=True)  # 記事の公開設定 Trueなら公開
    is_picked_up = models.BooleanField('Picked up Article?', default=False)  # 記事のPick Up設定 Trueならトップなどに公開される
    created_at = models.DateTimeField('Created at', default=timezone.now)  # 記事の作成日時 自動記録
    updated_at = models.DateTimeField('Updated at', default=timezone.now)  # 記事の追記日時 自動記録

    def __str__(self):
        return self.title