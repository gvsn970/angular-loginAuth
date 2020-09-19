import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {

  constructor() { }

  autheticate(userName,password){
    if(userName=='surya' && password=='surya'){
      sessionStorage.setItem('username', userName)
      return true;
    }else{
      return false;
    }
  }
  isUserLogin(){
    let user=sessionStorage.getItem('username');
    return !(user == null);
  }
  isLogOut(){
    sessionStorage.removeItem('username');
  }
}
