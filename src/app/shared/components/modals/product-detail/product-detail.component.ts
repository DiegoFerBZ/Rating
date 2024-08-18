import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BasicButtonComponent } from '../../../elements/basic-button/basic-button.component';
import { CommentsListComponent } from '../../comments-list/comments-list.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatDialogModule,BasicButtonComponent,CommentsListComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

}
