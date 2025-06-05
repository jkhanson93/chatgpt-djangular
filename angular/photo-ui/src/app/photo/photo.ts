import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'photo',
  imports: [ CommonModule ],
  templateUrl: './photo.html',
  styleUrl: './photo.css'
})
export class Photo {
  photoUrl: string | null = null;

  constructor(private photoService: PhotoService) {}

  fetchPhoto() {
    this.photoService.getRandomPhoto().subscribe({
      next: (response) => {
        this.photoUrl = `http://localhost:8000${response.url}`;
      },
      error: (err) => {
        console.error('Failed to load photo:', err);
        this.photoUrl = null;
      }
    });
  }
}
