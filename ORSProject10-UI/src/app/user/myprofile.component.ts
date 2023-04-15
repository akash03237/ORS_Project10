import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./user.component.css']
})
export class MyprofileComponent extends BaseCtl{
 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute,private httpClient: HttpClient) {
  super(locator.endpoints.USER, locator, route);
  }
ngOnInit(){
 
}
  

}
