import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicButtonComponent } from '../../elements/basic-button/basic-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailComponent } from '../modals/product-detail/product-detail.component';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, BasicButtonComponent,MatDialogModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  constructor(public productDetail: MatDialog) { }

  clicked() {
    this.productDetail.open(ProductDetailComponent, {
      minWidth: '500px',
      data: { title: 'Título del Diálogo', content: 'Contenido del Diálogo' }
    });
  }

}
