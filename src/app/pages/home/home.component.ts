import { Component } from '@angular/core';
import { ProductGridComponent } from '../../shared/components/product-grid/product-grid.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
