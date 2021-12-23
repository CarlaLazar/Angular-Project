import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    LazyLoadImageModule
  ],
  declarations: [
    SpinnerComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    LoadingComponent,
    ArticleCardComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SpinnerComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    LazyLoadImageModule,
    LoadingComponent,
    ArticleCardComponent,
  ]
})

export class SharedModule {
}