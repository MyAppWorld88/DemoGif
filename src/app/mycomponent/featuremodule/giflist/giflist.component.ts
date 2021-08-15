import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UrlCallService } from 'src/app/service/url-call.service';
@Component({
  selector: 'app-giflist',
  templateUrl: './giflist.component.html',
  styleUrls: ['./giflist.component.css']
})
export class GiflistComponent implements OnInit{
  allgif: any;
  searchTerm:string;
  noOfGif=20;
  p: number = 1;
  @ViewChild('searchT') search :ElementRef;
  constructor(private _urlservice: UrlCallService) { }

  ngOnInit(): void {
     this.callGifApi();
  }
  callGifApi(){
    this._urlservice.getGif('eKo9rZ3bKujVKSYLODAx4NbxbcumMOD9',this.noOfGif,5,'g','1c4762ed0907c7d8c84a2ba03949dfd406ec93ef').subscribe((data)=>{
     //  console.log(data);
       this.allgif=data.data;
     })
  }
  
  changeNoOfgif(value){
   this.noOfGif=value;
   this.allgif=[];
   this.callGifApi();
  }


}
