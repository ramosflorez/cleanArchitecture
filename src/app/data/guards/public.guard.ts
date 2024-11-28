import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthUseCase } from '../../domain/use-cases/auth.use-case';


@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {
  constructor(private authUseCase: AuthUseCase, private router: Router) {}

  canActivate(): boolean {
    if (this.authUseCase.isAuthenticated()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
