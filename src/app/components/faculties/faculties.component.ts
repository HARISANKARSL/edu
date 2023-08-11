import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from 'src/app/service/images.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent {
  allImages: any=[];
  constructor(private route:Router,private service:ImagesService){
   
  
  }
  ngOnInit(){
    this.service.getAllImges().subscribe((res)=>{
     
     this.allImages=res.staff
     console.log(this.allImages)
    })
       }
}
