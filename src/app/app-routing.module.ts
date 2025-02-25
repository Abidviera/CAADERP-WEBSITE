import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./caad-landing/caad-landing.module').then((m) => m.CaadLandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
     RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top' 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
