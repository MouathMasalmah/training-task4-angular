import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  public selectedCategory: string | null = null;

  products;
  categories;

  constructor(private productService: ProductService) {
    this.products = this.productService.products;

    this.categories = computed(() =>
      [...new Set(this.products().map(p => p.category))]
    );
  }

  public whenChangeCategory(value: any): void {
    if (typeof value === 'string') {
      this.selectedCategory = value === '-- All --' ? null : value;
    }
  }
}
