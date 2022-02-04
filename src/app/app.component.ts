import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:boolean = false;

  adminName:string = "iago";
  adminPassword:string = "makiaveli";
  
  
  loginName:string = "";
  loginPassword:string = "";

  loginNameError:boolean = false;
  loginPasswordError:boolean = false;


  check(){
    if(this.adminName === this.loginName && this.adminPassword === this.loginPassword){
      this.loginNameError = false;
      this.loginPasswordError = false;

      this.title = true;

      this.loginName = "";
      this.loginPassword = "";
    }else if(this.adminName != this.loginName && this.adminPassword === this.loginPassword){
      this.loginNameError = true;
      this.loginPasswordError = false;

      this.loginName = "";
      this.loginPassword = "";
    }else if(this.adminName === this.loginName && this.adminPassword != this.loginPassword){
      this.loginNameError = false;
      this.loginPasswordError = true;

      this.loginName = "";
      this.loginPassword = "";
    }else{
      this.loginNameError = true;
      this.loginPasswordError = true;

      this.loginName = "";
      this.loginPassword = "";
    }
  }
}
