import { Injectable, signal } from '@angular/core';
import { Product } from '../../interface/product';

const STORAGE_KEY = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = signal<Product[]>(this.loadFromLocalStorage());

  selectedProduct = signal<Product | null>(null);

  constructor() {}

  private loadFromLocalStorage(): Product[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data).map((p: any) => ({
      ...p,
      addedDate: new Date(p.addedDate)
    })) : [];
  }

  private saveToLocalStorage(products: Product[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }

  getAllProducts(): Product[] {
    return this.products();
  }

  getProductById(id: number): Product | null {
    const product = this.products().find(p => p.id === id) || null;
    this.selectedProduct.set(product);
    return product;
  }

  add(product: Product): void {
    const updated = [...this.products(), product];
    this.products.set(updated);
    this.saveToLocalStorage(updated);
  }

  update(updatedProduct: Product): void {
    const updated = this.products().map(p => p.id === updatedProduct.id ? updatedProduct : p);
    this.products.set(updated);
    this.saveToLocalStorage(updated);

    if (this.selectedProduct()?.id === updatedProduct.id) {
      this.selectedProduct.set(updatedProduct);
    }
  }

  delete(id: number): void {
    const updated = this.products().filter(p => p.id !== id);
    this.products.set(updated);
    this.saveToLocalStorage(updated);

    if (this.selectedProduct()?.id === id) {
      this.selectedProduct.set(null);
    }
  }

  reload(): void {
    this.products.set(this.loadFromLocalStorage());
  }
}
