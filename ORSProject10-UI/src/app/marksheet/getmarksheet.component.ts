import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from "../http-service.service";
import { BaseCtl } from '../base.component';
import { NgForm} from '@angular/forms';



@Component({
  selector: 'app-getmarksheet',
  templateUrl: './getmarksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})

export class GetmarksheetComponent extends BaseCtl{

  public form = {

    error: false, //error 
    message: null, //error or success message
    preload: [], // preload data
    data: { id: null,rollNo : null }, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list 
    pageNo : 0
   
  };
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpservice :HttpServiceService) {
    super(locator.endpoints.Marksheet, locator, route);

  }


  
  validate() {
    return this.validateForm(this.form.data);
  }
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.rollNo);
    return flag;
  }
  
  populateForm(form, data) {
    form.id = data.id;
    form.rollNo = data.rollNo;
  
  }
  
  go(){
    var _self = this;
    console.log("onClickSubmit");
    console.log(this.form.data);
    console.log(this.form.data.rollNo);
    
    
    this.httpservice.get("http://localhost:8080/Marksheet/rollno/"+this.form.data.rollNo,function (res){
      
      if(res.success){
        _self.form.list = res.result.data;
        if(_self.form.list.length == 0){
          _self.form.message = "No record found";
          _self.form.error = true;
        }
        console.log("List Size",_self.form.list.length );
      }else{
        _self.form.error = false;
        _self.form.message = res.result.message;
      }
      console.log('FORM', _self.form);
    });
  }

}


