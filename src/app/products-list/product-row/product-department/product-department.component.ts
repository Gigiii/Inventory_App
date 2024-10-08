import { Component, Input } from '@angular/core';
import { Product } from '../../../product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'product-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-department.component.html',
  styleUrl: './product-department.component.css'
})
export class ProductDepartmentComponent {
  @Input() product!: Product;
}
