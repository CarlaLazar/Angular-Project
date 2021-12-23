import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article | undefined;
  constructor( private activatedRoute: ActivatedRoute,
                private location: Location) { }

  ngOnInit() {
    this.activatedRoute.snapshot.data['article'].subscribe((article: Article) => {
      this.article = article;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
