import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [IndexModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
