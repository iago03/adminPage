import { Component, OnInit } from '@angular/core';
import { itemInfo } from 'src/app/shared-file/shared-class';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  delateItemsArr:string[] = [
    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    
  ];

  itemName:string = "";
  itemNameStatus:boolean = false;

  ngOnInit(): void {
  }

  itemInfoAreaStatus:boolean = false;

  putRequestItemInfo:itemInfo = new itemInfo("","","","","");

  render(){
    if(this.itemName != ""){
      console.log(this.itemName);
      this.itemName = "";
      this.itemNameStatus = false;
      this.itemInfoAreaStatus = true;
    }else{
      this.itemNameStatus = true;
    }
  }

}
