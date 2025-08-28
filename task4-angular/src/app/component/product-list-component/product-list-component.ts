import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CategoryFilterPipe } from '../../pips/category-filter-pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule, DropDownsModule, CategoryFilterPipe],
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent {
  public products = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', addedDate: new Date(2025, 7, 20) },
    { id: 2, name: 'Phone', price: 800, category: 'Electronics', addedDate: new Date(2025, 7, 21) },
    { id: 3, name: 'Shoes', price: 150, category: 'Fashion', addedDate: new Date(2025, 7, 22) },
    { id: 4, name: 'Watch', price: 300, category: 'Accessories', addedDate: new Date(2025, 7, 23) },
    { id: 5, name: 'Bag', price: 100, category: 'Fashion', addedDate: new Date(2025, 7, 24) },
    { id: 6, name: 'Headphones', price: 200, category: 'Electronics', addedDate: new Date(2025, 7, 25) },
    { id: 7, name: 'Jacket', price: 250, category: 'Fashion', addedDate: new Date(2025, 7, 26) },
    { id: 8, name: 'Sunglasses', price: 180, category: 'Accessories', addedDate: new Date(2025, 7, 27) },
    { id: 9, name: 'Tablet', price: 600, category: 'Electronics', addedDate: new Date(2025, 7, 28) },
    { id: 10, name: 'Camera', price: 900, category: 'Electronics', addedDate: new Date(2025, 7, 29) },
    { id: 11, name: 'Belt', price: 80, category: 'Accessories', addedDate: new Date(2025, 7, 30) }
  ];

  public categories = [...new Set(this.products.map(p => p.category))];

  public selectedCategory: string | null = null;

  public whenChangeCategory(value: any): void {
    if (typeof value === 'string') {
      this.selectedCategory = value === '-- All --' ? null : value;
    }
  }

}