import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../service/product-service/product-service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-detail-component.html',
  styleUrls: ['./product-detail-component.css']
})
export class ProductDetailComponent implements OnInit {
  productForm!: FormGroup;
  categories: string[] = [];
  editMode = false; 

  constructor(private fb: FormBuilder, public productService: ProductService) {}

  ngOnInit() {
    const product = this.productService.selectedProduct();

    if (product) {
      this.categories = [...new Set(this.productService.products().map(p => p.category))];

      this.productForm = this.fb.group({
        name: [product.name, [Validators.required, Validators.minLength(2)]],
        price: [product.price, [Validators.required, Validators.min(1)]],
        category: [product.category, Validators.required]
      });
    }
  }

  editProductUseForm() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const updatedProduct = {
      ...this.productService.selectedProduct(),
      ...this.productForm.value
    };

    this.productService.updateProduct(updatedProduct);
    alert('Product updated successfully!');
    this.editMode = false;
  }

  goBack() {
    history.back();
  }

  get f() {
    return this.productForm.controls;
  }
}
