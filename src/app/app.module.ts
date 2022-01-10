import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ElementaryModule } from './elementary/elementary.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    HttpClientModule,
    HttpClientModule,
    SharedModule,
    ElementaryModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}

