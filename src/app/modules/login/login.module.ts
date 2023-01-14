import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFirstComponent } from './login-first/login-first.component';
import { LoginSecondComponent } from './login-second/login-second.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginFirstComponent,
    LoginSecondComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: []
})

export class LoginModule { }
