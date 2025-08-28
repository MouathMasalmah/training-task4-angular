import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';   

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  homePage = signal(true);

  constructor(private router: Router) {}

  goToProductsPage() {
    this.homePage.set(false);
    this.router.navigate(['/products']);
  }

  goToHomePage() {
    this.homePage.set(true);
    this.router.navigate(['/']);
  }
}
