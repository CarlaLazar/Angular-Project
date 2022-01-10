import { InjectionToken } from "@angular/core";


export const ROUTES_CONFIG = new InjectionToken<any>('routes.config',{ providedIn: 'root',
factory: () => RoutesConfig});

const basePaths = {
  articles: 'articles',
  auth: 'auth',
  about: 'about'
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

export const getArticleDetail = (id: string) => `/${basePaths.articles}/${id}`;

export const RoutesConfig: any = {
  basePaths,
  routesNames,
  routes: {
    error404: `/${routesNames.error404}`,
    about: `/${routesNames.about}`,
    article: {
      myArticles: `/${basePaths.articles}/${routesNames.article.myArticles}`,
      detail: getArticleDetail
    },
    auth: {
      signup: `/${basePaths.auth}/${routesNames.auth.signup}`,
      login: `/${basePaths.auth}/${routesNames.auth.login}`,
    }
  }
};
