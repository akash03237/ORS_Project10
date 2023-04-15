import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})

  export class FileComponent implements OnInit {

    ngOnInit() {}

  
    fileToUpload: File = null;
    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      console.log(this.fileToUpload);
  }

  onUpload() {
    this.onSubmit(this.fileToUpload).subscribe(data => {
      console.log(this.fileToUpload);
      }, error => {
        console.log(error);
      });
    
  }
    
    
    onSubmit(fileToUpload: File) {
      const formData = new FormData();

      formData.append('file', fileToUpload);
      return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData,);
    }

}
