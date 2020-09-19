import { Component, OnInit } from '@angular/core';
import {AuthloginService} from '../service/authlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService :AuthloginService,private router : Router) { }

 statusMessage;
 statusSuccess:boolean=false;
 statusFail:boolean=false;
  invalidLogin = false
  login(data){
    
    if(this.authService.autheticate(data.name,data.pwd)){
     
       this.invalidLogin = true
       console.log(data+"success")
       this.router.navigate(['/welcome'])
    }else{
       this.invalidLogin = false;
      // this.router.navigate[('')]
       this.statusFail=false;
       this.statusMessage="Invalid user and password";
       console.log(data+" fail")
    }
  }
  ngOnInit() {
  }

}
