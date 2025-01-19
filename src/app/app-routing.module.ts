import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from '../app/pages/students/students.component';
import { StudentsListComponent } from '../app/pages/students-list/students-list.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'students-list', component: StudentsListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
