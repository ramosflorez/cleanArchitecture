import { Component, OnInit } from '@angular/core';
import { AuthUseCase } from '../../../../../domain/use-cases/auth.use-case';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authUseCase: AuthUseCase, private router: Router) { }

  ngOnInit() {
  }

  onLogout(): void {
    console.log('Logout');
    this.authUseCase.logout();
    this.router.navigate(['/login']);
  }

}
