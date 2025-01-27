import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openLinkedIn() {
    window.open('https://www.linkedin.com', '_blank');
  }

  openGitHub() {
    window.open('https://www.github.com', '_blank');
  }
}
