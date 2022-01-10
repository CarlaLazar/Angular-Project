import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from '../service/article.service';


@Injectable()
export class ArticleResolver implements Resolve<Observable<Article>> {
  constructor(private articleService: ArticlesService) {
  }

  async resolve(route: ActivatedRouteSnapshot) {
    const id: string = route.paramMap.get('id') || '';
    return this.articleService.getArticleById(id);
  }
}
