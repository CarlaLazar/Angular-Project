import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/shared/models/article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }
  endpoint: string = "http://localhost:123453/api/articles";

  searchArticles(): Observable<any> {
    return this.http.get(this.endpoint); 
   
  }

  getArticleById(id: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`).pipe(map((response: any) => {
      return !response.errors ? {} : response;
    }));; 
  }

  createArticle(article: Article) {
    return this.http.post(this.endpoint, article).pipe(map((response: any) => {
      return !response.errors ? response.data.createArticle : response;
    }));; 
  }

  voteArticle(article: Article) {
    return this.http.put(`${this.endpoint}/${article.id}`, article);
  }

  removeArticle(id: string) {
    return this.http.delete(`${this.endpoint}/${id}`).pipe(map((response: any) => {
      return !response.errors ? {} : response;
    }));;
  }
}
