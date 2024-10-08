import { Component,
         Input,
         HostBinding,
 } from '@angular/core';
import { Product } from '../../product.model';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';

@Component({
  selector: 'product-row',
  standalone: true,
  imports: [ProductImageComponent, PriceDisplayComponent, ProductDepartmentComponent],
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent {

  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
