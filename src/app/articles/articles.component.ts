import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from '../article/service/article.service';
import { Article } from '../shared/models/article.model';
import { EventsService, EventsTypes } from '../shared/services/events.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]> | undefined;
  constructor(private articlesService: ArticlesService,
    private eventsService: EventsService) {
}
  ngOnInit() {
    this.articles$ = this.articlesService.searchArticles();

    this.eventsService.events$.subscribe((event) => {
      if (event.type === EventsTypes.UPDATE_ARTICLES) {
        this.articles$ = this.articlesService.searchArticles();
      }
    })
  }

}
