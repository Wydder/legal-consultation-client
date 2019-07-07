import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
      },
      {
        path: 'in-consultation',
        loadChildren: './in-consultation/in-consultation.module#InConsultationModule',
      },
      {
        path: 'archive',
        loadChildren: './archive/archive.module#ArchiveModule',
      },
      {
        path: 'members',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
      },
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
      },
      {
        path: '**',
        redirectTo: '/home',
      }
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
