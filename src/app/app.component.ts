import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as Aos from 'aos';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
  showHeader: boolean=true;
 
   constructor(private route:Router,private ngxService:NgxUiLoaderService){
    
     route.events.subscribe((val)=>{
       if(val instanceof NavigationEnd){
         if(val.url=='/login'  ){
           this.showHeader=false
         }
       }
     })
     route.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/error'  ){
          this.showHeader=false
        }
      }
    })
    route.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/home' || val.url=='/contact' || val.url=='/about' || val.url=='/gallery' || val.url=='/faculties' ){
          this.showHeader=true
        }
      }
    })
   }
   ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);

    // OR
    this.ngxService.startBackground("do-background-things");

    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 8000);
  }
  
   
}
