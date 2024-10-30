import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentManagementComponent } from './student-management/student-management.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentManagementComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentManagement';
}
