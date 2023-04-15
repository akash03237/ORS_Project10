
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataValidator } from '../utility/data-validator';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent extends BaseCtl {

  selected = null;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.COURSE, locator, route);
  }
  validate() {
    return this.validateForm(this.form.data);
  }
 

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.courseName);
    flag = flag && validator.isNotNullObject(form.duration);
    flag = flag && validator.isNotNullObject(form.description);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.courseName = data.courseName;
    form.duration = data.duration;
    form.description = data.description;
    console.log('Populated Form', form);
  }
}

