import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  topArticlesLimit: 7,
  snackBarDuration: 3000
};