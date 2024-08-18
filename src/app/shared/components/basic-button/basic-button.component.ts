import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss'
})
export class BasicButtonComponent {

  @Input() label:string="Button";

}
