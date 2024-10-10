import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  private readonly _translateService = inject(TranslateService);
  private readonly _platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initializeLanguage();
    }
  }
  
  

  constructor() { 
    this.isBrowser = isPlatformBrowser(this._platformId);

    if (this.isBrowser) {
        // Safely interact with localStorage only in browser environment
        this.initializeLanguage();
    }
  }

  private initializeLanguage(): void {
    // 1- get lang from local storage
    const savedLang = localStorage.getItem('lang');

    // 2- set default lang
    this._translateService.setDefaultLang('en');

    // 3- use lang found in local storage, or fallback to default
    this._translateService.use(savedLang || 'en');
    
    // Update direction based on language
    this.changeDirection(savedLang || 'en');
  }

  changeDirection(lang: string): void {
    if (this.isBrowser) {
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  }

  changeLang(lang: string): void {
    if (this.isBrowser) {
      localStorage.setItem("lang", lang);
      this._translateService.use(lang);
      this.changeDirection(lang);
    }
  }
}
