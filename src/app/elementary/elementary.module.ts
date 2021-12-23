import { NgModule } from '@angular/core';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ElementaryRoutingModule } from './elemetary-routing.module';
import { Page404Component } from './pages/page404/page404.component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ElementaryRoutingModule
  ],
  declarations: [
    HomePageComponent,
    Page404Component,
    NavbarComponent,
    AboutComponent,
    SearchBarComponent,
  ],
  exports: [
    HomePageComponent,
    Page404Component,
    NavbarComponent,
    SearchBarComponent,
    AboutComponent
  ]
})

export class ElementaryModule {
}
