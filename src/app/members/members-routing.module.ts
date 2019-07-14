import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.MembersComponent,
  },
  {
    path: 'member-profile/:memberId',
    component: fromContainers.MemberProfileComponent,
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
export class MembersRoutingModule {}
