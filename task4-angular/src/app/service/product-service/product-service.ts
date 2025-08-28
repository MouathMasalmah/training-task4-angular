import { Injectable, signal } from '@angular/core';
import { Product } from '../../interface/product';

const STORAGE_KEY = 'products';
@Injectable({ providedIn: 'root' })
export class ProductService {
  updateProduct(product: Product) {
    const updated = this.products().map(p => (p.id === product.id ? product : p));
    this.products.set(updated);
    this.saveToLocalStorage(updated);
  }

  products = signal<Product[]>([]); 
  selectedProduct = signal<Product | null>(null);

  constructor() {
    this.reloadProducts();
  }

  private loadFromLocalStorage(): Product[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data
      ? JSON.parse(data).map((p: any) => ({ ...p, addedDate: new Date(p.addedDate) }))
      : [];
  }

  private saveToLocalStorage(products: Product[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }

  reloadProducts(): void {
    this.products.set(this.loadFromLocalStorage());
  }

  addProduct(product: Omit<Product, 'id' | 'addedDate'>) {
    const nextId = this.products().length
      ? Math.max(...this.products().map(p => p.id)) + 1
      : 1;

    const newProduct: Product = {
      id: nextId,
      ...product,
      addedDate: new Date()
    };

    const updated = [...this.products(), newProduct];
    this.products.set(updated);
    this.saveToLocalStorage(updated);
  }

  deleteProduct(id: number) {
    const updated = this.products().filter(p => p.id !== id);
    this.products.set(updated);
    this.saveToLocalStorage(updated);
  }
}
