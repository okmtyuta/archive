import { Injectable } from '@nestjs/common';
import { Article, PrismaClient } from '@prisma/client';

@Injectable()
export class ArticleService {
  prisma = new PrismaClient();

  async getAllArticles(): Promise<Article[]> {
    const articles = await this.prisma.article.findMany();
    await this.prisma.$disconnect();
    return articles;
  }

  async getPostById(params: { id: string }): Promise<Article> {
    const id = Number(params.id);
    const article = await this.prisma.article.findUnique({
      where: { id: id },
    });
    await this.prisma.$disconnect();
    return article;
  }

  async createArticle(body: { title: string; body: string }) {
    const article = await this.prisma.article.create({
      data: { title: body.title, body: body.body },
    });
    await this.prisma.$disconnect();
    return article;
  }

  async deleteArticleById(body: { id: string }): Promise<Article> {
    const id = Number(body.id);
    const article = await this.prisma.article.delete({
      where: {
        id: id,
      },
    });
    await this.prisma.$disconnect();
    return article;
  }
}
