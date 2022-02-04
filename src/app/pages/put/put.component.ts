import { Component, OnInit } from '@angular/core';
import { itemInfo } from 'src/app/shared-file/shared-class';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  constructor() { }

  itemName:string = "";
  itemNameStatus:boolean = false;
  inputStatus:boolean = false;

  ngOnInit(): void {
  }

  itemInfoAreaStatus:boolean = false;

  putRequestItemInfo:itemInfo = new itemInfo("iago","https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","200","mshvildi","sadme");

  render(){
    if(this.itemName != ""){
      this.itemName = "";
      this.itemNameStatus = false;
      this.itemInfoAreaStatus = true;
    }else{
      this.itemNameStatus = true;
    }
  }

  putRequest(){
    this.itemInfoAreaStatus = false;
    this.inputStatus = false;
  }

  changeInputStatus(){
    this.inputStatus = true;
  }

}
