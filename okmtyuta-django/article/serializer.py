
from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article  # Articleをmodelに設定
        fields = [
            "title",
            "thumbnail",
            "caption",
            "author",
            "description",
            "body",
            "is_public",
            "is_picked_up",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "created_at",
            "updated_at"
        ]