import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from './configs/routes.config';


const routes: Routes = [
  { path: RoutesConfig.basePaths.auth, loadChildren: () => import('./authentication/auth.module').then(m => m.AuthenticationModule) },
  { path: RoutesConfig.basePaths.home, loadChildren: () => import('./elementary/elementary.module').then(m => m.ElementaryModule) },
  { path: RoutesConfig.basePaths.about, loadChildren: () => import('./elementary/elementary.module').then(m => m.ElementaryModule) },
  { path: RoutesConfig.basePaths.articles, loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) },
  { path: '**', redirectTo: RoutesConfig.routes.error404 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
