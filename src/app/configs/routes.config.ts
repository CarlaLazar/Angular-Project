import { InjectionToken } from '@angular/core';

export const ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  article: 'article',
  auth: 'auth',
};

const routesNames = {
  home: '',
  error404: '404',
  about: 'about',
  article: {
    myArticles: 'my-articles',
    detail: ':id',
  },
  auth: {
    signup: 'sign-up',
    login: 'log-in',
  }
};

export const getArticleDetail = (id: string) => `/${basePaths.article}/${id}`;

export const RoutesConfig: any = {
  basePaths,
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    about: `/${routesNames.about}`,
    article: {
      myArticles: `/${basePaths.article}/${routesNames.article.myArticles}`,
      detail: getArticleDetail
    },
    auth: {
      signup: `/${basePaths.auth}/${routesNames.auth.signup}`,
      login: `/${basePaths.auth}/${routesNames.auth.login}`,
    }
  }
};
