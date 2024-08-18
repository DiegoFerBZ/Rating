import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NgIf,NgFor } from '@angular/common';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [MatListModule,MatIconModule,NgIf,NgFor],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss'
})
export class CommentsListComponent {

  comments: Comment[] = []; 

  constructor() {
    this.comments = [
      { user: 'Juan Perez', text: 'Este es un comentario de ejemplo.' },
      { user: 'Ana Gómez', text: 'Este es otro comentario interesante.' },
      { user: 'Carlos Diaz', text: 'Aquí hay un comentario adicional.' }
    ];
  }
}

export interface Comment{
  user: string;
  text: string;
}
