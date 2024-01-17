import { computed, Injectable, signal } from '@angular/core';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentStore {
  #students = signal<Student[]>([]);
  students = computed(this.#students);

  addAll(students: Student[]) {
    this.#students.set(students);
  }

  addOne(student: Student) {
    this.#students.update((students) => [...students, student]);
  }

  deleteOne(id: number) {
    this.#students.update((students) => students.filter((s) => s.id !== id));
  }
}
