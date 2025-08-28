import { Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list-component/product-list-component';
import { ProductDetailComponent } from './component/product-detail-component/product-detail-component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' }
];
