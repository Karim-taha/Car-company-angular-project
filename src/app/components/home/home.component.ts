import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from 'src/app/model/classes/company-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cInfo1: CompanyInfo;
cInfo2: CompanyInfo;
cInfo3: CompanyInfo;
cInfo4: CompanyInfo;
cInfo5: CompanyInfo;
cInfo6: CompanyInfo;
photo:string;
isServiceDisplayed1:boolean;
isServiceDisplayed2:boolean;
isServiceDisplayed3:boolean;
isServiceDisplayed4:boolean;
isServiceDisplayed5:boolean;
isServiceDisplayed6:boolean;
  constructor() {
    this.isServiceDisplayed1 = false;

    this.cInfo1 = new CompanyInfo(1,"BMW",
     "https://dummyimage.com/300x300/6d498c/ffffff&text=Test+Demo",
     ["Super Tires", "Faster Wheels","Air Bags"],1000, new Date());

     this.cInfo2 = new CompanyInfo(2,"Volvo",
     "https://dummyimage.com/300x300/6d498c/ffffff&text=Test+Demo",
     ["Super Tires", "Faster Wheels","Air Bags"],1000, new Date());

     this.cInfo3 = new CompanyInfo(3,"Rolls Roys",
     "https://dummyimage.com/300x300/6d498c/ffffff&text=Test+Demo",
     ["Super Tires", "Faster Wheels","Air Bags"],1000, new Date());

     this.cInfo4 = new CompanyInfo(4,"BMW",
     "https://dummyimage.com/300x300/6d498c/ffffff&text=Test+Demo",
     ["Super Tires", "Faster Wheels","Air Bags"],1000, new Date());

     this.cInfo5 = new CompanyInfo(6,"Volvo",
     "https://dummyimage.com/300x300/6d498c/ffffff&text=Test+Demo",
     ["Super Tires", "Faster Wheels","Air Bags"],1000, new Date());

     this.cInfo6 = new CompanyInfo(6,"Rolls Roys",
     "https://dummyimage.com/300x300/6d498c/ffffff&text=Test+Demo",
     ["Super Tires", "Faster Wheels","Air Bags"],1000, new Date());
   }

  ngOnInit(): void {
  }

  features1(){
    this.isServiceDisplayed1 = !this.isServiceDisplayed1;
  }

  features2(){
    this.isServiceDisplayed2 = !this.isServiceDisplayed2;
  }

  features3(){
    this.isServiceDisplayed3 = !this.isServiceDisplayed3;
  }

  features4(){
    this.isServiceDisplayed4 = !this.isServiceDisplayed4;
  }

  features5(){
    this.isServiceDisplayed5 = !this.isServiceDisplayed5;
  }

  features6(){
    this.isServiceDisplayed6 = !this.isServiceDisplayed6;
  }

}
