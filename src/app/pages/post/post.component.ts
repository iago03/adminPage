import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { itemInfo } from 'src/app/shared-file/shared-class';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  itemInfoAreaStatus:boolean = false;

  item:itemInfo = new itemInfo("","","","","");

  itemRenderer:itemInfo = new itemInfo("","","","","");

  constructor(private angularFirestorre:AngularFirestore) { }

  ngOnInit(): void {
  }


  render(){
    this.item.ImgUrl = this.url;
    this.itemInfoAreaStatus = true
    this.itemRenderer = this.item
  }

  postRequest(){
	  this.angularFirestorre.collection('iago').add(
		{
		  Name: this.item.Name,
		  Price: this.item.Price,
		  ImgUrl:this.item.ImgUrl,
		  Description: this.item.Description,
		  Used: this.item.Used,
		  createdAt: 9999999999999 - (new Date().getTime())
		}
	  ).then(() => {
		this.alertWithSuccess()
		this.itemInfoAreaStatus = false;
		this.item = new itemInfo("","","","","");
	  })

  }

  


  

// file upload
	url: any; 
	msg = "";
	

	selectFile(event: any) {
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = " აირჩიე მხოლოდ სურათი";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

// file upload

// alert
	
	alertWithSuccess(){  
		Swal.fire('გმადლობთ...', 'დამატება წარმატეუბულია!', 'success');  
  	}    
	  
// alert
}
