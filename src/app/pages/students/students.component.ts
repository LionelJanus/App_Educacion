import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone:false,
  
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', Validators.required],
      course: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);  // Aquí puedes enviar los datos a un servicio o hacer lo que necesites
    }
  }
}
