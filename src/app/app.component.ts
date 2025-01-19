import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  modalVisible = false;  // Modal inicialmente oculto

  // Método para abrir el modal
  abrirLoginModal() {
    this.modalVisible = true;
  }

  // Método para cerrar el modal
  cerrarLoginModal() {
    this.modalVisible = false;
  }
}
