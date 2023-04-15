import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends BaseCtl {
  selected = null;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.STUDENT, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.firstName);
    flag = flag && validator.isNotNullObject(form.lastName);
    flag = flag && validator.isNotNullObject(form.enrolNo);
    flag = flag && validator.isNotNullObject(form.phoneNo);
    flag = flag && validator.isNotNullObject(form.email);
    flag = flag && validator.isNotNullObject(form.dob);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.collegeId = data.collegeId;
    console.log(form.collegeId + " inside populateForm method");

    form.email = data.email;
    form.enrolNo = data.enrolNo;
    form.dob = data.dob;

    //let ndate = new Date(data.dob);
   
    //console.log(form.dob + 'date ------',ndate)
    form.firstName = data.firstName;
    form.lastName = data.lastName;
    form.phoneNo = data.phoneNo;
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
