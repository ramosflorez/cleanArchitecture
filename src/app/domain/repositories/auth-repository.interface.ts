import { Observable } from 'rxjs';
import { AuthToken, User, UserCredentials } from '../entities/auth.entity';

export interface AuthRepository { //interfaz/ patron que describe las operaciones necesarias para la autenticación.
  login(credentials: UserCredentials): Observable<AuthToken>;
  logout(): void;
  isAuthenticated(): boolean;
  getUserData(): Observable<User>;
}
