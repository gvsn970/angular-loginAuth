import { Component, OnInit } from '@angular/core';
import { AuthloginService} from '../service/authlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService : AuthloginService) { }

  ngOnInit() {
    
  }

}
