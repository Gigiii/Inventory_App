import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.model';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'inventory-app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inventory_App';
  products: Product[];

  constructor(){
    this.products = 
    [
      new Product(
      'MYSHOES',
      'Black Running Shoes',
      '/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99),
      new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
      new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99)
    ];
  }

  productWasSelected(product: Product){
    console.log("Product was selected");
  }  

}
