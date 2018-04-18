import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlacesComponent } from './list-places/list-places.component';
import {PlacesRoutingModule} from './places-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PlacesRoutingModule,
  ],
  declarations: [
    ListPlacesComponent
  ]
})
export class PlacesModule { }
