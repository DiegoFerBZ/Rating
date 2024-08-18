import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ratingApp';
}
