import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppConfig } from 'src/app/configs/app.config';


declare const require: any;
const currentBrowser = require('bowser');


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private snackBar: MatSnackBar) {
  }

  showSnackBar(name: string, panelClass: string): void {
    const config: any = new MatSnackBarConfig();
    config.duration = panelClass === 'warning-snack-bar' ? 50000 : AppConfig.snackBarDuration;
    config.horizontalPosition = 'right';
    config.verticalPosition = 'top';
    config.panelClass = panelClass;
    this.snackBar.open(name, 'OK', config);
  }

  static isBrowserValid() {
    const browser = currentBrowser.getParser(window.navigator.userAgent);
    return browser.satisfies({
      windows: {
        'internet explorer': '>10'
      },
      macos: {
        safari: '>10.1'
      },
      chrome: '>20.1.1432',
      firefox: '>31',
      opera: '>22'
    });
  }
}

