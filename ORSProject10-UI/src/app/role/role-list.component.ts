import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role.component.css']
  })


  export class RoleListComponent extends BaseListCtl {
    constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
      super(locator.endpoints.ROLE, locator, route);
    }
  
  }