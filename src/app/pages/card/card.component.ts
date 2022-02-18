import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { itemInfo } from 'src/app/shared-file/shared-class';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private angularFirestore:AngularFirestore) { }

  @Input() cardItem:itemInfo = new itemInfo("","","","","");

  @Output() changeitemInfoAreaStatus:EventEmitter<boolean> = new EventEmitter();

  @Input() id:any;

  ngOnInit(): void {
  }

  deleteRequest(){
    this.confirmBox();

    
  }

  // alert
  confirmBox(){  
    Swal.fire({  
      title: 'დარწმუნებული ხართ, რომ გინდათ წაშლა?',  
      text: 'ფაილი წაიშლება ბაზიდან!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'წაშლა!',  
      cancelButtonText: 'გაუქმება' 
    }).then((result) => {  
     if (result.value) { 
      
      this.angularFirestore.collection('iago').doc(this.id).delete().then(() => {
        Swal.fire(  
            'წაშლილია!',  
            'ფაილი წაშლილია ბაზიდან.',  
            'success' 
        )  
      })
      this.changeitemInfoAreaStatus.emit(false);

      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
        'გაუქმება',  
        'ფაილი არ წაშლილა :)',  
        'error' 
        )  
      }  
    })  
  }

}
