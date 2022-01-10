import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../authentication/auth.guard";
import { RoutesConfig } from "../configs/routes.config";
import { ArticleDetailsComponent } from "../article/article-detail/article-details/article-details.component";
import { MyArticlesComponent } from "../article/my-articles/my-articles.component";
import { ArticleResolver } from "../article/shared/article.resolver";
import { ArticlesComponent } from "./articles.component";


const articleRoutes = RoutesConfig.routesNames.article;

const articlesRoutes: Routes = [
  { path: articleRoutes.myArticles, component: MyArticlesComponent, canActivate: [AuthGuard] },
  {
    path: articleRoutes.detail,
    component: ArticleDetailsComponent,
    resolve: { article: ArticleResolver }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})

export class ArticlesRoutingModule {
}
