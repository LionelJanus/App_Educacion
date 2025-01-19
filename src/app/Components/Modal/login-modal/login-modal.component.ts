import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noHomeroValidator } from '../../../shared/index.ts/index.ts.module';

@Component({
  selector: 'app-login-modal',
  standalone:false,
  
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  @Input() visible = false;  // Propiedad de entrada visible
  @Output() close = new EventEmitter<void>();

  loginForm: FormGroup;
passwordControlIsValid: any;
checked: any;
rememberMe: any;

constructor(private fb: FormBuilder) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '', 
      [
        Validators.required, 
        Validators.minLength(6), 
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')
      ]
    ],
    rememberMe: [false] // Agrega el control para el checkbox
  });
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get emailControlIsInvalid() {
    return this.emailControl?.invalid && this.emailControl.touched;
  }

  get emailControlIsValid() {
    return this.emailControl?.valid && this.emailControl.touched;
  }

  get emailErrors() {
    return this.emailControl?.errors;
  }

  cerrarModal() {
    this.close.emit();  // Emite el evento para cerrar el modal
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('El form es invalido!');
      this.loginForm.markAllAsTouched();
    } else {
      alert('Los datos se enviaron!');
      console.log(this.loginForm.value);
      this.loginForm.reset();
    }
  }
}
