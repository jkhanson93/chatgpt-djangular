import { Component } from '@angular/core';
import { Photo } from './photo/photo';

@Component({
  selector: 'app-root',
  imports: [Photo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'photo-ui';
}
