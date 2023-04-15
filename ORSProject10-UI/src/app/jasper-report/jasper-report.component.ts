import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { SearchResponse, RecordResponse } from '../response';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseListCtl } from '../base-list.component';
@Component({
  selector: 'app-jasper-report',
  templateUrl: './jasper-report.component.html',
  styleUrls: ['./jasper-report.component.css']
})
export class JasperReportComponent  extends BaseListCtl  {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.JASPERREPORT, locator, route);

  }

  ngOnInit() {   
    this.generateReport();   
  }

  

 
}
