import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    if (this.loginForm.value.email === "" ||this.loginForm.value.email === null || this.loginForm.value.password === "" ||this.loginForm.value.password === null ) {
     alert("Fields cannot be empty")
     return
    }

    this.http.post<any>('http://localhost:3000/api/user/login', this.loginForm.value).
    subscribe((res:any)=>{      
     alert("Logged In")
     this.router.navigate(['dashboard'])
    }, (err)=>{
      console.log(err);
      alert(err.error)
    }
    )
    this.loginForm.reset();
  }
}
