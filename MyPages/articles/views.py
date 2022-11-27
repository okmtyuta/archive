from django.shortcuts import redirect, render
from django.urls import is_valid_path
from .forms import ArticleCreateForm

from .models import Article

def article_list(request):
    template_name = "articles/article_list.html"
    articles = Article.objects.all().order_by("-created_at")
    picked_up_articles = Article.objects.filter(is_picked_up=True).order_by("-created_at")

    content = {
        "articles": articles,
        "picked_up_articles": picked_up_articles,
    }
    return render(request, template_name, content)

def article_detail(request, pk):
    article = Article.objects.get(pk = pk)
    content = {
        "article": article,
        "twitter_card": article,
    }
    template_name = "articles/article_detail.html"
    return render(request, template_name, content)

def article_create(request):
    params = {"title": "", "thumbnail": "", "caption": "", "author": "", "description": "", "body": "", "from": None}

    if request.method == 'POST':
        form = ArticleCreateForm(request.POST)

        if form.is_valid():
            form.save()
        else:
            print("ret")
        # return redirect(article_list)
    else:
        params['form'] = ArticleCreateForm()

    content = {}
    template_name = "articles/article_create.html"
    return render(request, template_name, params)