import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFirstComponent } from './login-first/login-first.component';
import { LoginSecondComponent } from './login-second/login-second.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Login'
  },
  children: [
    {
      path: '',
      component: LoginFirstComponent,
      data: {
        title: 'Login'
      },
    },
    {
      path: '/confirm',
      component: LoginSecondComponent,
      data: {
        title: 'Confirm code'
      },
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
