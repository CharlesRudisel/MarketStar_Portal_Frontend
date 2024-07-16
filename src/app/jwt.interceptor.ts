import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const jWTInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);

  // List of endpoints to exclude from the interceptor
  const excludedEndpoints = [
    'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/auth/register',
    'https://spring-app-20240712213542.wonderfulisland-fee7ef32.eastus2.azurecontainerapps.io/auth/authenticate'
  ];

  // Check if the request URL matches any excluded endpoint
  const isExcluded = excludedEndpoints.some(endpoint => req.url.includes(endpoint));

  if (isExcluded) {
    console.log(`Interceptor bypassed for ${req.url}`);
    return next(req);
  }

  console.log(`Interceptor is triggered for ${req.url}`);
  
  const token = authService.getToken();
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(authReq);
  } else {
    return next(req);
  }
};
