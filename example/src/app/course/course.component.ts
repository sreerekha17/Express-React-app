import { Component, OnInit } from '@angular/core';
import { Model, Course } from "./model";
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
    model: Model;
    courseName: string;
    errors: {
      invalidName?: boolean;
      duplicateName?: boolean;
    };
    selected: Record<string, any>[];

    constructor() { 
      this.model = new Model();
      this.courseName = "";
      this.errors = {};
      this.selected = [];
    }
  
    ngOnInit(): void {

    }

    
    getCollege() {
      return this.model.college;
    }

    getCourses() {
      return this.model.courses
    }

    validateCourseName(name) {
      const duplicateName = this.model.courses.find(course => course.title === name);
      if (!name || name === '') {
        this.errors.invalidName = true;
        return false;
      }
      else if (duplicateName) {
        this.errors.duplicateName = true;
        return false;
      }
      else {
        delete this.errors?.invalidName;
        delete this.errors?.duplicateName;
        this.courseName = name;
        return true;
      }
    }

    addCourse () {
      const valid = this.validateCourseName(this.courseName);
      if (!valid || this.errors.invalidName || this.errors.duplicateName) {
        return false;
      }
      const course = new Course(this.courseName, true);
      this.model.addCourse(course);
    }

    updateAvailability(c) {
      this.model.courses.forEach(course => {
        if(c.title === course.title) {
          course.available = !course.available;
        }
      })
    }

    updateSelection(c, checked) {
      c.selected = checked;
      this.model.courses.filter(course => {
        if (c.title == course.title) {
          course.selected = checked;
        }
      });

      this.selected.length = 0;
      this.selected = this.model.courses.filter(c => c.selected);
    }

    removeSelected() {
      const coursesNotSelected = this.model.courses.filter(c => !c.selected).map(c => c);
      this.model.courses.length = 0;
      this.model.courses = coursesNotSelected;

      this.selected.length = 0;
    }
}