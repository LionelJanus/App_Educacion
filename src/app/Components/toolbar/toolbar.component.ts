import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../Modal/login-modal/login-modal.component';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
cerrarLoginModal() {
throw new Error('Method not implemented.');
}
  modalVisible = false;  // Propiedad para controlar la visibilidad del modal
emailErrors: any;
emailControlIsInvalid: any;
loginForm: any;
constructor(private dialog: MatDialog) {}

abrirLoginModal() {
  const dialogRef = this.dialog.open(LoginModalComponent, {
    width: '400px', // Ajusta el tamaño de tu modal aquí
    data: { /* pasar datos si es necesario */ }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('El diálogo se cerró');
  });
  }
  }