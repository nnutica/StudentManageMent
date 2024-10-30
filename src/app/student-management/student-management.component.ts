import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent {
  students = [{ name: "aa", lastName: "bbbb" }];
  studentForm: FormGroup;
  editStudentForm: FormGroup;
  editingIndex = -1;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.editStudentForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  addStudent() {
    if (this.studentForm.valid) {
      this.students.push(this.studentForm.value);
      this.studentForm.reset();
    }
  }

  editStudent(index: number) {
    this.editingIndex = index;
    const student = this.students[index];
    this.editStudentForm.setValue({
      name: student.name,
      lastName: student.lastName
    });
  }

  updateStudent() {
    if (this.editStudentForm.valid) {
      this.students[this.editingIndex] = this.editStudentForm.value;
      this.cancelEdit();
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  cancelEdit() {
    this.editingIndex = -1;
    this.editStudentForm.reset();
  }
}
