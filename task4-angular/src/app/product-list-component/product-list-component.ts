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

  
}
