import { Component,
        EventEmitter,
        Input,
        Output
       } from '@angular/core';
import { Product } from '../product.model';
import { ProductRowComponent } from './product-row/product-row.component';
import { CommonModule } from '@angular/common';

/**
* @ProductsList: A component for rendering all ProductRows and
* storing the currently selected Product
*/
@Component({
  selector: 'products-list',
  standalone: true,
  imports: [ProductRowComponent, CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent {
  @Input() productList!: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct!: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct){
      return false;
    }else{
      return product.sku === this.currentProduct.sku;
    }
  }
}
