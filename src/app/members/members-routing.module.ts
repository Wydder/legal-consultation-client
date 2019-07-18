import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.MembersGuard],
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
