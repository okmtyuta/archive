import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Article, PrismaClient } from '@prisma/client';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  prisma = new PrismaClient();
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAllArticles(): Promise<Article[]> {
    const articles = this.articleService.getAllArticles();
    return articles;
  }

  @Get(':id')
  async getPostById(@Param() params: { id: string }): Promise<Article> {
    const article = this.articleService.getPostById(params);
    return article;
  }

  @Post()
  async createArticle(@Body() body: { title: string; body: string }) {
    const article = this.articleService.createArticle(body);
    return article;
  }

  @Post('delete')
  async deleteArticleById(@Body() body: { id: string }): Promise<Article> {
    const article = this.articleService.deleteArticleById(body);
    return article;
  }
}
