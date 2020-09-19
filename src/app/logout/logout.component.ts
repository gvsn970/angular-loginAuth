import { Component, OnInit } from '@angular/core';
import {AuthloginService} from '../service/authlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authSrvice : AuthloginService,private router : Router) { }
 
  ngOnInit() {
    this.authSrvice.isLogOut();
   
    this.router.navigate[("")]
    location.reload();
  }

}
