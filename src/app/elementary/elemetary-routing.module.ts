import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { RoutesConfig } from '../configs/routes.config';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Page404Component } from './pages/page404/page404.component';

const routesNames = RoutesConfig.routesNames;

const elementaryRoutes: Routes = [
  { path: routesNames.home, component: HomePageComponent, pathMatch: 'full' },
  { path: routesNames.about, component: AboutComponent, pathMatch: 'full' },
  { path: routesNames.error404, component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(elementaryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ElementaryRoutingModule {
}
