import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/article/service/article.service';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { RoutesConfig, ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { Article } from '../../models/article.model';
import { EventsService, EventsTypes } from '../../services/events.service';
import { UtilsService } from '../../services/utils.service';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  @Input() article: Article | undefined;

  constructor(private articleService: ArticlesService,
    private router: Router,
    private utilsService: UtilsService,
    private authService: AuthService,
    private eventsService: EventsService,
    @Inject(ROUTES_CONFIG) public routesConfig: any) {
  }

  like(article: Article): Promise<void> | void {
    if (this.authService.isLoggedIn()) {
      this.articleService.voteArticle(article).subscribe((response) => {
        if (!response) {
          this.eventsService.send({ type: EventsTypes.UPDATE_ARTICLES })
        } else {
          this.utilsService.showSnackBar(response.toString(), 'warning-snack-bar');
        }
      });
    } else {
      this.router.navigate([RoutesConfig.routes.auth.logIn]);
    }
  }



}


