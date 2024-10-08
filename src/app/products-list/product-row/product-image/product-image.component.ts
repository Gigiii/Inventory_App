import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'product-image',
  standalone: true,
  imports: [],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css'
})
export class ProductImageComponent {
  @Input() product!: Product;
}
