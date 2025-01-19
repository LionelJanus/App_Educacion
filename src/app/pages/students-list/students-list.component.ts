import { Component } from '@angular/core';

@Component({
  selector: 'app-students-list',
  standalone:false,
  
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  students = [
    { name: 'Juan Pérez', age: 18, email: 'juan@example.com' },
    { name: 'Ana García', age: 22, email: 'ana@example.com' }
  ];

  displayedColumns: string[] = ['name','lastname','age', 'email','country','address','course', 'actions']; // Asegúrate de que las columnas sean las correctas
  dataSource = this.students;  // Establece el dataSource con tus datos

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }

  editStudent(index: number): void {
    const student = this.students[index];
    console.log('Editar alumno', student);
  }
}
