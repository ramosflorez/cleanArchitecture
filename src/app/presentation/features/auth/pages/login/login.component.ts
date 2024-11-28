import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUseCase } from '../../../../../domain/use-cases/auth.use-case';
import { UserCredentials } from '../../../../../domain/entities/auth.entity';
import { tap } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = 'valeria.r@eyeride.io';
  password: string = 'Thiago1225';
  errorMessage: string | null = null;

  constructor(private authUseCase: AuthUseCase, private router: Router) {}

  onLogin(): void {
    const credentials: UserCredentials = { email: this.email, password: this.password };
    this.authUseCase.login(credentials).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => {
        this.errorMessage = 'Credenciales inválidas';
      },
    });
  }
}
