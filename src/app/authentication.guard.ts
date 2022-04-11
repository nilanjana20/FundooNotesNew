import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './Services/authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService:AuthServiceService, private router:Router){}
  canActivate(): boolean{
    if(!this.authService.getToken()){
      this.router.navigateByUrl('/login');
    }
    return this.authService.getToken();
  }
  
}
