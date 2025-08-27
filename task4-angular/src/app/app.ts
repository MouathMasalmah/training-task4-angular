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
  showHome = signal(true);

  constructor(private router: Router) {}

  goToProductsPage() {
    this.showHome.set(false);
    this.router.navigate(['/products']);
  }
}
