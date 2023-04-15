import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { DataValidator } from '../utility/data-validator';
import {ServiceLocatorService} from '../service-locator.service';
import { format } from 'url';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignUpComponent implements OnInit {


  endpoint = "http://localhost:8080/Auth/signUp";

  public form = {

    error: false, //error 
    message: '', //error or success message
    data: { id: null }, //form data
    inputerror: {}, // form input error messages
    
  };
  

  

  constructor(private serviceLocator:ServiceLocatorService, private httpService: HttpServiceService, private dataValidator: DataValidator, private router: Router) {
  }
  validate() {
    return this.validateForm(this.form);
  }

  /**
   * Override by childs 
   * 
   * @param form 
   */
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
  
    flag = flag && validator.isNotNullObject(form.firstName);
    
    flag = flag && validator.isNotNullObject(form.lastName);
 
    flag = flag && validator.isNotNullObject(form.loginId);
    
    flag = flag && validator.isNotNullObject(form.password);
    
    flag = flag && validator.isNotNullObject(form.phone);
    
    flag = flag && validator.isNotNullObject(form.gender);
  
    flag = flag && validator.isNotNullObject(form.dob);
    return flag;

  }

  /**
   * Initialize component
   */
  ngOnInit() {
  }

set(){
  location.reload()
}

  reset(){
    this.router.navigateByUrl('/signup');
  }

  submit() {
    var _self = this;
    this.httpService.post(this.endpoint, this.form.data,function (res) {

      console.log('MyResponse', res);

      _self.form.message = '';
      _self.form.inputerror = {};

      if (res.result.message) {
        _self.form.message = res.result.message;
      }

      _self.form.error = !res.success;
      if (_self.form.error && res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;

          
      }

    });
  }
}
