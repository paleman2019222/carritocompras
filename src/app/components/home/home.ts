import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from '../agregar/agregar';
import { CartComponent } from '../cart/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AgregarComponent, CartComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  products: string[] = [];
  showCart = false;
  justAdded = false; // para mostrar “Producto agregado”

  onProductAdded(nombre: string) {
    this.products = [...this.products, nombre];
    this.justAdded = true;
    setTimeout(() => (this.justAdded = false), 1800);
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }
}
