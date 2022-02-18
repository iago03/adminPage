import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared-file/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private login:LoginService){

  }

  ngOnInit(){
      this.localStorage();
  }
  
  title:boolean = false;

  
  loginEmail:string = "";
  loginPassword:string = "";

  adminError:boolean = false;




  async check(){
    let adminInfo = {
      name: this.loginEmail,
      password: btoa(this.loginPassword)
    }

    this.login.loginFireBase(this.loginEmail,this.loginPassword).subscribe(
      {
        next: () => {
          this.title = true;
          this.adminError = false;

          this.loginEmail = "";
          this.loginPassword = "";

          localStorage.setItem("Admin",JSON.stringify(adminInfo));
        },
        error: () => {
          this.adminError = true;

          this.loginEmail = "";
          this.loginPassword = "";
        }
      }
    )
    
  }


  localStorage(){
    if(localStorage["Admin"] != undefined){
      this.title = true;
      let localStorageInfo = JSON.parse(localStorage["Admin"]);


      this.login.loginFireBase(localStorageInfo.name,atob(localStorageInfo.password)).subscribe(
        {
          next: () => {

            this.adminError = false;
  
            this.loginEmail = "";
            this.loginPassword = "";

          },
          error: () => {
            this.adminError = true;
  
            this.loginEmail = "";
            this.loginPassword = "";

            this.title = false;
          }
        }
      )
      
    }
  }
}
