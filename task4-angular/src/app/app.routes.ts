import { Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list-component/product-list-component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '**', redirectTo: '' }
];
