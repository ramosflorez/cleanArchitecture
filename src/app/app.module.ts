import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/features/auth/pages/login/login.component';
import { AuthRepositoryImpl } from './data/datasource/auth.repository';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'AuthRepository', useClass: AuthRepositoryImpl }, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
