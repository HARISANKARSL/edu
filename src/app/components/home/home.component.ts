import { animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { ImagesService } from 'src/app/service/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showHeader: boolean=true;
 allImages:any=[]
  isFixed=false;
  constructor(private route:Router,private service:ImagesService){
   
  
  }
 
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2,
     
      
      },
      740: {
        items: 3,
        nav:true,
       
        touchDrag:true,
    
       dotsSpeed:1000,
       
       
      },
      940: {
        items: 4,
        
       nav:true,
        touchDrag:true,
   
       
       dotsSpeed:1000
       
      }
    },
    nav: true
  }
  @HostListener('window:scroll',['$event'])
    scrollCheck(){
  if(window.pageYOffset>50){
    this.isFixed=true
  }else{
    this.isFixed=false
  }
    }

    onScrollTop(){
      document.body.scrollIntoView({behavior:'smooth'})
    }

    
 
}



