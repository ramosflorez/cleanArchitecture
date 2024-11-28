import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthRepository } from '../../domain/repositories/auth-repository.interface';
import { AuthToken, User, UserCredentials } from '../../domain/entities/auth.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryImpl implements AuthRepository { //implementa la lógica para interactuar con el endpoint
  private readonly tokenKey = 'token';
  private readonly userSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  login(credentials: UserCredentials): Observable<AuthToken> {
    const url = `${environment.apiUrl}/auth/token/login/`;
    return this.http.post<AuthToken>(url, credentials).pipe(
      tap((response) => {
        if (response.auth_token) {
          localStorage.setItem(this.tokenKey, response.auth_token);
          this.getUserData().subscribe({
            next: (user) => {
              this.userSubject.next(user);
              localStorage.setItem('user', JSON.stringify(user));
            },
            error: (err) => {
              console.error('Error fetching user data:', err);
              localStorage.removeItem(this.tokenKey);
            },
          });
        }
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.userSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getUserData(): Observable<User> {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      throw new Error('Token is missing');
    }

    const url = `${environment.apiUrl}/auth/me/`;
    return this.http.get<User>(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).pipe(
      tap((response) => {
        this.userSubject.next(response);
      })
    );
  }
}
