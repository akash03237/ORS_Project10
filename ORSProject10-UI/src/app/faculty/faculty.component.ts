import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent extends BaseCtl {

  selected = null;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.FACULTY, locator, route);
  }

  
  validate() {
    return this.validateForm(this.form.data);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.firstName);
    console.log(form.firstName)
    flag = flag && validator.isNotNullObject(form.lastName);
    console.log(form.lastName)
    flag = flag && validator.isNotNullObject(form.email);
    console.log(form.email)
    flag = flag && validator.isNotNullObject(form.qualification);
    console.log(form.qualification)
    flag = flag && validator.isNotNullObject(form.gender);
    console.log(form.gender)
    flag = flag && validator.isNotNullObject(form.phoneNo);
    console.log(form.phoneNo+"in validateForm----------------------------");
    
    flag = flag && validator.isNotNullObject(form.courseId);
    console.log(form.courseId)
    flag = flag && validator.isNotNullObject(form.collegeId);
    console.log(form.collegeId)
    flag = flag && validator.isNotNullObject(form.subjectId);
    console.log(form.subjectId)
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.subjectId = data.subjectId;
    console.log(form.subjectId+'subject--');
    form.collegeId = data.collegeId;
    form.courseId = data.courseId;
    console.log(form.courseId+'course ----');
    form.firstName = data.firstName;
    form.lastName = data.lastName;
    form.email = data.email;
    form.qualification = data.qualification;
    form.gender = data.gender;
    form.dob = data.dob;
    form.phoneNo = data.phoneNo;
    console.log("phoneno----------------"+form.phoneNo);
    
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  
}
