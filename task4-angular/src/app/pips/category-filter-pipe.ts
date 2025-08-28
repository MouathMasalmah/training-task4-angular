import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {
  transform(products: any[], category: string | null): any[] {
    if (!products) return [];
    if (!category) return products;  
    return products.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    );
  }
}
