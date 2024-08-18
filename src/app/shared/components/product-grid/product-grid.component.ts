import { Component } from '@angular/core';
import { ProductCardComponent } from '../../elements/product-card/product-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [ProductCardComponent,MatGridListModule],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss'
})
export class ProductGridComponent {

}
