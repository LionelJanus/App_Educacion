import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noHomeroValidator} from '../../../shared/custom-validators/index'

@Component({
  selector: 'app-login-modal',
  standalone:false,
  
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

loginForm: FormGroup;
passwordControlIsValid: any;
checked: any;
rememberMe: any;
modalVisible: any;

constructor(private fb: FormBuilder) {
  this.loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email, noHomeroValidator]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    rememberMe: [false],
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
