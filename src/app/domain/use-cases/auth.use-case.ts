import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken, User, UserCredentials } from '../entities/auth.entity';
import { AuthRepository } from '../repositories/auth-repository.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthUseCase { //implementa la lógica de negocio para iniciar sesión y cerrar sesión. Estos casos de uso dependen de interfaces, no de implementaciones.
  constructor( @Inject('AuthRepository') private authRepository: AuthRepository) {}

  login(credentials: UserCredentials): Observable<AuthToken> {
    return this.authRepository.login(credentials);
  }

  logout(): void {
    this.authRepository.logout();
  }

  isAuthenticated(): boolean {
    return this.authRepository.isAuthenticated();
  }

  getUserData(): Observable<User> {
    return this.authRepository.getUserData();
  }
}
