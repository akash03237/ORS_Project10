import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { SearchResponse, RecordResponse } from '../response';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.SUBJECT, locator, route);

  }

  validate() {
    return this.validateForm(this.form.data);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.subjectName);
    flag = flag && validator.isNotNullObject(form.description);
    flag = flag && validator.isNotNullObject(form.courseId);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.subjectName = data.subjectName;
    form.description = data.description;
    form.courseId = data.courseId;
    console.log('Populated Form', form);
  }

}