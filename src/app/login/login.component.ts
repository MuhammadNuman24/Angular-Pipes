import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string='';
password:string=""
  constructor( public router:Router) { }

  ngOnInit(): void {
  }
dologin(){
  if(this.email == "ali@gmail.com" && this.password == "numan"){
    this.router.navigateByUrl('/home')}
   else {
     alert("Enter Valid Details.")}
}


}
