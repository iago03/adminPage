import { Component, OnInit } from '@angular/core';
import { itemInfo } from 'src/app/shared-file/shared-class';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  itemInfoAreaStatus:boolean = false;

  item:itemInfo = new itemInfo("","","","","");

  itemRenderer:itemInfo = new itemInfo("","","","","");

  constructor() { }

  ngOnInit(): void {
  }


  render(){
    this.item.ImgUrl = this.url;
    this.itemInfoAreaStatus = true
    this.itemRenderer = this.item
  }

  postRequest(){
	  this.itemInfoAreaStatus = false;
	  this.item = new itemInfo("","","","","");
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
}
