import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';


const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
