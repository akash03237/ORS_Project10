import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from "../http-service.service";
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-marksheetmerit-list',
  templateUrl: './marksheetmerit-list.component.html',
  styleUrls: ['./marksheet.component.css']
})

export class MarksheetmeritListComponent extends BaseCtl{
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpservice :HttpServiceService) {
    super(locator.endpoints.Marksheet, locator, route);

  }
  ngOnInit() {
    this.getMeritList();
  }

  getMeritList(){
    var _self = this;
  
    this.httpservice.get("http://localhost:8080/Marksheet/meritlist",function (res){
      
      if(res.success){
        _self.form.list = res.result.list;
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


