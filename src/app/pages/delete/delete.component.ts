import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private angularFireStore:AngularFirestore) { }

  itemName:string = "";
  itemNameStatus:boolean = false;
  loading:boolean = true;

  itemNameNotFound:boolean = true;

  ngOnInit(): void {
  }

  itemInfoAreaStatus:boolean = false;

  deleteRequestItemInfo:any;

  // delete request id

  deleteId:any;

  // delete request id
  render(){
    if(this.itemName != ""){
      this.loading = true;
      this.itemInfoAreaStatus = true;


      let iago = this.angularFireStore.collection('iago', ref => ref 
      .orderBy('Name')
      .startAt(this.itemName)
      .limit(1)
      ).stateChanges()
      .subscribe((v:any) => {

        if(v[0].payload.doc.data().Name === this.itemName){
          this.loading = false;
          this.deleteRequestItemInfo = v[0].payload.doc.data();
          this.deleteId = v[0].payload.doc.id;
  
          this.itemName = "";
  
          this.itemNameStatus = false;
          this.itemNameNotFound = true;
  
        }else{
          this.itemNameStatus = true;
          this.itemNameNotFound = false;
          this.itemInfoAreaStatus = false;
        }        
      })

      setTimeout(() => {
        iago.unsubscribe()
      },2000)
    }else{
      this.itemNameStatus = true;
    }

    
  }

  changeitemInfoAreaStatusFunc(event:boolean){
    this.itemInfoAreaStatus = event;
    if(!event){
      this.loading = true;
    }
  }

}
