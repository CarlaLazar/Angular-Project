import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticlesComponent } from '../articles/articles.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteArticleComponent } from './article-delete-dialog/delete-article/delete-article.component';
import { ArticleDetailsComponent } from './article-detail/article-details/article-details.component';
import { ArticleRoutingModule } from './article-routing.module';
import { MyArticlesComponent } from './my-articles/my-articles.component';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ArticleRoutingModule
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

export class ArticleModule {
}
