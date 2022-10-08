import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  // display = false;
  ngOnInit(): void {
  }
  open(){
    // this.http.get<any>("http://localhost:4200/profile/personal")
    // this.display=true;
    this.router.navigateByUrl('profile/personal');
    
  }
  open1(){
    this.router.navigate(['profile/company']);
  }
  open2(){
    // this.http.get<any>("http://localhost:4200/profile/preference")
    this.router.navigate(['profile/preference']);
  }

}
