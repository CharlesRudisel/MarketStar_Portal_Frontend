import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { jWTInterceptor } from './jwt.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(withInterceptors([jWTInterceptor])),
    importProvidersFrom(CommonModule), provideAnimationsAsync() // Import CommonModule
  ]
};
