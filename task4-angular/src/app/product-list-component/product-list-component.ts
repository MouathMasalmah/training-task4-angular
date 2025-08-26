import { Component } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';


@Component({
  selector: 'app-product-list-component',
  imports: [GridModule],
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent {

}
