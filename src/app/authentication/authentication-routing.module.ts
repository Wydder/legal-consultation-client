import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'log-in',
    component: fromContainers.LogInComponent,
  },
  {
    path: 'sign-up',
    redirectTo: 'sign-up/'
  },
  {
    path: 'sign-up/:email',
    component: fromContainers.SignUpComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthenticationRoutingModule {}
