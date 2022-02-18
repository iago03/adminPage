import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  constructor(private angularFireStore:AngularFirestore) { }

  itemName:string = "";
  itemNameStatus:boolean = false;
  inputStatus:boolean = false;
  itemNameNotFound:boolean = true;

  loadingStatus:boolean = false;

  ngOnInit(): void {
  }

  itemInfoAreaStatus:boolean = false;

  putRequestItemInfo:any;

  //put recuest id

    putId:any;

  //put recuest id

  render(){
    
    if(this.itemName != ""){
      this.itemInfoAreaStatus = true;
      this.loadingStatus = false;

      let iago = this.angularFireStore.collection('iago', ref => ref 
      .orderBy('Name')
      .startAt(this.itemName)
      .limit(1)
      ).stateChanges()
      .subscribe((v:any) => {

        if(v[0].payload.doc.data().Name === this.itemName){
          this.loadingStatus = true;
          this.putRequestItemInfo = v[0].payload.doc.data();
          this.putId = v[0].payload.doc.id;
  
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
      },3000)
    }else{
      this.itemNameStatus = true;
    }

    
  }

  putRequest(){
    this.angularFireStore.collection('iago').doc(this.putId).update({
      Name: this.putRequestItemInfo.Name,
      Description: this.putRequestItemInfo.Description,
      ImgUrl: this.putRequestItemInfo.ImgUrl,
      Price: this.putRequestItemInfo.Price,
      Used: this.putRequestItemInfo.Used,
    }).then(() => {
      this.alertWithSuccess()
    });
    
   

    this.itemInfoAreaStatus = false;
    this.inputStatus = false;
  }

  changeInputStatus(){
    this.inputStatus = true;
  }

  //alert
  alertWithSuccess(){  
		Swal.fire('გმადლობთ...', 'შეცვლა წარმატებით შესრულდა!', 'success');  
  } 
  // alert

}
