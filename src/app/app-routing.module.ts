import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from '../app/pages/students/students.component';
import { StudentsListComponent } from '../app/pages/students-list/students-list.component';
import { HomeComponent } from './pages/home/home-page';
const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'homeComponent', component: HomeComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
