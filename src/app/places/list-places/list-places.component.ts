import { Component, OnInit } from '@angular/core';
import {Place} from '../../shared/models/place.model';
import {Price} from '../../shared/enums/price.enum';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.scss']
})
export class ListPlacesComponent implements OnInit {

  Places: Array<Place>;

  constructor() { }

  ngOnInit() {
    this.Places = [
      {
        id: '123',
        name: 'place1',
        description: 'lorem Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, ' +
        'dignissim sit amet, adipiscing nec, ultricies sed, dolor. ' +
        'Cras elementum ultrices diam. Maecenas ligula massa, varius a, ' +
        'semper congue, euismod non, mi. Proin porttitor, ' +
        'orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
        'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, ' +
        'pretium a, enim. Pellentesque congue.',
        price: Price.AVERAGE,
        address: 'address n 1 street wherever 22322',
        rating: 3
      },
      {
        id: '123',
        name: 'place1',
        description: 'lorem Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, ' +
        'dignissim sit amet, adipiscing nec, ultricies sed, dolor. ' +
        'Cras elementum ultrices diam. Maecenas ligula massa, varius a, ' +
        'semper congue, euismod non, mi. Proin porttitor, ' +
        'orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
        'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, ' +
        'pretium a, enim. Pellentesque congue.',
        price: Price.AVERAGE,
        address: 'address n 1 street wherever 22322',
        rating: 3
      },
      {
        id: '123',
        name: 'place1',
        description: 'lorem Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, ' +
        'dignissim sit amet, adipiscing nec, ultricies sed, dolor. ' +
        'Cras elementum ultrices diam. Maecenas ligula massa, varius a, ' +
        'semper congue, euismod non, mi. Proin porttitor, ' +
        'orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
        'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, ' +
        'pretium a, enim. Pellentesque congue.',
        price: Price.AVERAGE,
        address: 'address n 1 street wherever 22322',
        rating: 3
      },
      {
        id: '123',
        name: 'place1',
        description: 'lorem Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, ' +
        'dignissim sit amet, adipiscing nec, ultricies sed, dolor. ' +
        'Cras elementum ultrices diam. Maecenas ligula massa, varius a, ' +
        'semper congue, euismod non, mi. Proin porttitor, ' +
        'orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
        'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, ' +
        'pretium a, enim. Pellentesque congue.',
        price: Price.AVERAGE,
        address: 'address n 1 street wherever 22322',
        rating: 3
      },
      {
        id: '125',
        name: 'place2',
        description: 'lorem Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, ' +
        'dignissim sit amet, adipiscing nec, ultricies sed, dolor. ' +
        'Cras elementum ultrices diam. Maecenas ligula massa, varius a, ' +
        'semper congue, euismod non, mi. Proin porttitor, ' +
        'orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
        'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, ' +
        'pretium a, enim. Pellentesque congue.',
        price: Price.AVERAGE,
        address: 'address n 2 street wherever 666',
        rating: 2
      },
      {
        id: '124',
        name: 'place3 this place has a long name to test howe the view handles this',
        description: 'lorem Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, ' +
        'dignissim sit amet, adipiscing nec, ultricies sed, dolor. ' +
        'Cras elementum ultrices diam. Maecenas ligula massa, varius a, ' +
        'semper congue, euismod non, mi. Proin porttitor, ' +
        'orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
        'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, ' +
        'pretium a, enim. Pellentesque congue.',
        price: Price.AVERAGE,
        address: 'address n 2 street a long street name to test how the view handles this 111-222',
        rating: 5
      }
    ];
  }

}
