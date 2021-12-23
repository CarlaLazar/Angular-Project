import { DOCUMENT } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { RoutesConfig } from './configs/routes.config';
import { UtilsService } from './shared/services/utils.service';

declare const Modernizr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isOnline: boolean;

  constructor(
    private title: Title,
    private meta: Meta,
    private snackBar: MatSnackBar,
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) doc: Document,
    @Inject(LOCALE_ID) locale: string
  ) {
    this.isOnline = navigator.onLine;
    renderer.setAttribute(doc.documentElement, 'lang', locale);
  }

  ngOnInit() {
    this.title.setTitle('App title');

    this.onEvents();
    this.checkBrowser();
  }

  onEvents() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.meta.updateTag({
              name: 'description',
              content: 'Home meta description'
            });
            break;
          case '/' + RoutesConfig.routesNames.article.basePath:
            this.title.setTitle('Articles list');
            this.meta.updateTag({
              name: 'description',
              content: 'Articles meta description'
            });
            break;
        }
      }
    });
  }

  checkBrowser() {
    if (UtilsService.isBrowserValid()) {
      this.checkBrowserFeatures();
    } else {
      this.snackBar.open(
        'Change your browser',
        'OK'
      );
    }
  }

  checkBrowserFeatures() {
    let supported = true;
    for (const feature in Modernizr) {
      if (
        Modernizr.hasOwnProperty(feature) &&
        typeof Modernizr[feature] === 'boolean' &&
        Modernizr[feature] === false
      ) {
        supported = false;
        break;
      }
    }

    if (!supported) {
      this.snackBar.open('Update your browser', 'OK');
    }

    return supported;
  }

}
