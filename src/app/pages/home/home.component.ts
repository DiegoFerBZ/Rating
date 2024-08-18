import { Component } from '@angular/core';
import { BasicButtonComponent } from "../../shared/components/basic-button/basic-button.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasicButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
