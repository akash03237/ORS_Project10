import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { HttpServiceService } from '../http-service.service';
import { SearchResponse, RecordResponse } from '../response';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';


@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})

export class MarksheetComponent extends BaseCtl {

  getKey = false;
  selected = null;
  fileToUpload: File = null;
  marksheetForm: FormGroup = null;
  uploadForm: FormGroup;
 
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute , private httpClient: HttpClient) {
    super(locator.endpoints.MARKSHEET, locator, route);

  }

  submit() {
    var _self = this;
    console.log('in submit');
    console.log(this.form);
    console.log(this.form.data);
    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
      _self.form.message = '';
      _self.form.data.id = res.result.data;
      if (_self.fileToUpload) {
        console.log('Dheeraj');
        _self.myFile();
      }
      if (res.success) {
        _self.form.message = "Data is saved";
        _self.form.data.id = res.result.data;

        console.log(_self.form.data.id);
        console.log("----------Dheeraj----------.");

      } else {
        _self.form.error = true;
        if (res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;
        }
        _self.form.message = res.result.message;
      }
      _self.form.data.id = res.result.data;
      console.log('FORM', _self.form);
    });
  }


  onFileSelect(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

  }

  onUpload(marksheetform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }


  myFile() {
    console.log(this.form.data.id + 'after super.submit-----');
    this.onSubmitProfile(this.fileToUpload, this.marksheetForm).subscribe(data => {
      console.log(this.fileToUpload);
    }, error => {
      console.log(error);
    });

  }

  onSubmitProfile(fileToUpload: File,marksheetform: FormGroup) {
    const formData = new FormData();
    let phone = null;
    formData.append('file', fileToUpload);
    console.log(this.form.data.id + 'this id number ======');
    return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData);
  }

  validate() { 
    return this.validateForm(this.form.data);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    console.log('Student name :: ' + form.name);
    flag = flag && validator.isNotNullObject(form.rollNo);
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.physics);
    flag = flag && validator.isNotNullObject(form.chemistry);
    flag = flag && validator.isNotNullObject(form.maths);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.studentId =data.studentId;
    form.rollNo = data.rollNo;
    form.physics = data.physics;
    form.chemistry = data.chemistry;
    form.maths = data.maths;
    form.imageId = data.imageId;
    console.log('Populated Form', form);
  }

}


