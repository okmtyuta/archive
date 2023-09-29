from django import forms
from .models import Article

class ArticleCreateForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ("title", "thumbnail", "caption", "author", "description", "body")
        labels = {
            "title": "TITLE",
            "thumbnail": "THUMBNAIL",
            "caption": "CAPTION",
            "author": "AUTHOR",
            "description": "DESCRIPTION",
            "body": "BODY"
        }
        help_texts = {
            "title": "TITLE",
            "thumbnail": "THUMBNAIL",
            "caption": "CAPTION",
            "author": "AUTHOR",
            "description": "DESCRIPTION",
            "body": "BODY"
        }