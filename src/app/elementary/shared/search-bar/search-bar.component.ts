import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { ArticlesService } from 'src/app/article/service/article.service';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  defaultArticles: Array<Article>;
  articleFormControl: FormControl;
  filteredArticles: any;

  constructor(private articlesService: ArticlesService,
              @Inject(ROUTES_CONFIG) public routesConfig: any) {
    this.defaultArticles = [];
    this.articleFormControl = new FormControl();
  }

  ngOnInit() {
    this.articlesService.searchArticles().subscribe((articles: Array<Article>) => {
      this.defaultArticles = articles;

      this.articleFormControl.valueChanges.pipe(
        startWith(null as unknown as string),
        map(value => this.filterArticles(value)))
        .subscribe(articlesFiltered => {
          this.filteredArticles = articlesFiltered;
        });
    });
  }

  filterArticles(val: string): Article[] {
    return val ? this.defaultArticles.filter(article => article.title.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.defaultArticles;
  }

}
