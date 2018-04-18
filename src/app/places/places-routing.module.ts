import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListPlacesComponent} from './list-places/list-places.component';

const placesRoutes: Routes = [
  { path: 'places', component: ListPlacesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      placesRoutes
    )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class PlacesRoutingModule { }
