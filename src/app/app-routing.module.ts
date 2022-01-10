import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RoutesConfig } from './configs/routes.config';
import { HomePageComponent } from './elementary/pages/home-page/home-page.component';


const routes: Routes = [
  { path:  "", component:HomePageComponent },
  { path:  RoutesConfig.basePaths.about, component:AboutComponent },
  { path: RoutesConfig.basePaths.auth, loadChildren: () => import('./authentication/auth.module').then(m => m.AuthenticationModule) },
  { path: RoutesConfig.basePaths.articles, loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
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
