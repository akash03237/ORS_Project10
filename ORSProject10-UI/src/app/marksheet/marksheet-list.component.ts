import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marksheet-list',
  templateUrl: './marksheet-list.component.html',
  styleUrls: ['./marksheet.component.css']
})

export class MarksheetListComponent extends BaseListCtl {
  imageToShow: any;
  myKey = "";

  
createImageFromBlob(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.imageToShow = reader.result;
  
  }, false);

  if (image) {
     reader.readAsDataURL(image);
  }
}

 public form = {

   error: false, //error 
   message: null, //error or success message
   preload: [], // preload data
   data: { id: null}, //form data
   inputerror: {}, // form input error messages
   searchParams: {}, //search form
   searchMessage: null, //search result message
   list: [ ], // search list 
   pageNo: 0
 };


 selectedFile: File;
 retrievedImage: any;
 base64Data: any;
 retrieveResonse: any;
 message: string;
 imageName: any;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.MARKSHEET, locator, route);
  }

  getImage(id) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.form.data.id = id;
    console.log(this.form.data.id);
    
    this.httpClient.get('http://localhost:8080/Marksheet/profilePic/'+this.form.data.id, { responseType: 'blob' }).subscribe(data => {
      this.createImageFromBlob(data);
      this.myKey= this.form.data.id;
    }, error => {
      
      console.log(error);
    });

  }

}


