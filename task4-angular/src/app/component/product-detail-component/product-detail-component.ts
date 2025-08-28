import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product-service/product-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail-component.html',
  styleUrls: ['./product-detail-component.css']
})
export class ProductDetailComponent {
  constructor(public productService: ProductService) {}

  backToPreviousPage() {
    history.back();
  }
}
