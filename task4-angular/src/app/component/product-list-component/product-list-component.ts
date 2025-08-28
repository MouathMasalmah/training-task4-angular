import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CategoryFilterPipe } from '../../pips/category-filter-pipe';
import { ProductService } from '../../service/product-service/product-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule, DropDownsModule, CategoryFilterPipe],
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent {
  selectedCategory: string | null = null;

  constructor(public productService: ProductService) {}

  get products() {
    return this.productService.products();
  }

  get categories() {
    return [...new Set(this.products.map(p => p.category))];
  }

  addProduct(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct({
        name: form.value.name,
        price: +form.value.price,
        category: form.value.category
      });
      form.resetForm();
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
