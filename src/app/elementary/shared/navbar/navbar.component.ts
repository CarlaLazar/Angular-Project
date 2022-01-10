import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { RoutesConfig, ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public projectName: string;
  public currentUrl: string | undefined;
  public languages: any[] | undefined;
  public selectedLanguage: string | undefined;
  public isLoggedIn: boolean;

  constructor(
  private storageService: StorageService,
  private authService: AuthService,
  @Inject(ROUTES_CONFIG) public routesConfig: any,
  private router: Router) { 
    this.projectName = "SWEDEN";
    this.selectedLanguage = '';
    this.currentUrl = '';
    this.languages = [{ name: 'en', label: 'English' }, { name: 'sw', label: 'Swedish' }];
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.selectedLanguage = this.storageService.getCookie('language') || 'en';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.isLoggedIn = this.authService.isLoggedIn();
      }
    });
  }

  changeLanguage(language: string): void {
    this.storageService.setCookie('language', language);
    this.selectedLanguage = language;
  }

  logOut(): void {
    this.storageService.removeCookie('accessToken');
    this.isLoggedIn = this.authService.isLoggedIn();
    this.router.navigate([RoutesConfig.routes.home]);
  }

}
