import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.html',
  styleUrls: ['./agregar.css'],
})
export class AgregarComponent {
  @Output() add = new EventEmitter<string>();
  nombre = '';

  onSubmit() {
    const value = this.nombre.trim();
    if (!value) return;
    this.add.emit(value);    
    this.nombre = '';        
  }
}
