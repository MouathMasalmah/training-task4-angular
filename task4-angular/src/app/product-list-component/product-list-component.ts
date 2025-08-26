import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-product-list',
  standalone: true, 
  imports: [CommonModule, GridModule],
  templateUrl: './product-list-component.html'
})
export class ProductListComponent {
  public products = [];

  public gridView: GridDataResult = { data: [], total: 0 };
  public pageSize = 5;
  public skip = 0;

  constructor() {
    this.loadItems();
  }

  public onStateChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.products.slice(this.skip, this.skip + this.pageSize),
      total: this.products.length
    };
  }
}
