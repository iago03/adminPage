import { Component, Input, OnInit } from '@angular/core';
import { itemInfo } from 'src/app/shared-file/shared-class';

@Component({
  selector: 'app-item-info-component',
  templateUrl: './item-info-component.component.html',
  styleUrls: ['./item-info-component.component.css']
})
export class ItemInfoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  firstDropDown:boolean = false;
  secondDropDown:boolean = true;
  @Input() itemInfoInputStatus:boolean = false;

  @Input() itemInfo:itemInfo = new itemInfo("","","","","");

  dropDownFirst(){
    this.firstDropDown = !this.firstDropDown;
  }

  dropDownSecond(){
    this.secondDropDown = !this.secondDropDown;
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
			this.itemInfo.ImgUrl = reader.result; 
		}
	}

// file upload

}


