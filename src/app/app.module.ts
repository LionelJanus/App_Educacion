import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginModalComponent } from './Components/Modal/login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentsComponent } from './pages/students/students.component';
import { StudentsListComponent } from './pages/students-list/students-list.component';
import { MatTableModule } from '@angular/material/table';  
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home-page';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginModalComponent,
    StudentsComponent,
    StudentsListComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    RouterModule,
    MatToolbarModule,
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
