import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeleteArticleComponent } from "../article/article-delete-dialog/delete-article/delete-article.component";
import { ArticleDetailsComponent } from "../article/article-detail/article-details/article-details.component";
import { ArticlesRoutingModule } from "./article-routing.module";
import { MyArticlesComponent } from "../article/my-articles/my-articles.component";
import { SharedModule } from "../shared/shared.module";
import { ArticlesComponent } from "./articles.component";
import { RouterModule, Routes } from "@angular/router";
import { RoutesConfig } from "../configs/routes.config";


// const routes: Routes = [
//     { path:  "", component: ArticlesComponent },
//     { path: '**', redirectTo: RoutesConfig.routes.error404 }
//   ];
  

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ArticlesRoutingModule
  ],
  declarations: [
    MyArticlesComponent,
    ArticleDetailsComponent,
    DeleteArticleComponent,
  ],
  entryComponents: [
    DeleteArticleComponent
  ]
})

export class ArticlesModule {
}
