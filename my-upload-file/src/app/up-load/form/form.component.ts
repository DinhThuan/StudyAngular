import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
   selector: 'app-form',
   templateUrl: './form.component.html',
   styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
   @ViewChild('search') searchElement: ElementRef;
   show: boolean = false;
   name: string;

   @ViewChild('fileUpLoad') fileUpLoad: ElementRef;
   public imagePath;
   public imgUrl: any = "https://enterfind.files.wordpress.com/2013/05/windows8_account_picture.png";
   public message: string;

   constructor() { }

   ngOnInit() {
   }

   preview(files) {
      const othis = this;
      console.log(files);
      if (files.length === 0)
         return;

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
         this.message = "Only images are supported.";
         return;
      }

      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
         console.log(_event);
         this.imgUrl = reader.result;
         // console.log('Path img: ' + this.imgURL);
      }
   }

   showSearch() {
      console.log(this.searchElement);
      this.show = !this.show;
      this.searchElement.nativeElement.focus();
      // alert("focus");
   }

   ngAfterViewInit() {
      // this.firstNameElement.nativeElement.focus();
   }

}
