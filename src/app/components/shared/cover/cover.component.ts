import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
 
})
export class CoverComponent {
  showval:string=""
  constructor(private route:Router){}
ngOnInit(){
  if(this.route.url==='/about'){
    this.showval="About"
  }else if(this.route.url==='/faculties'){
this.showval="Our Faculties"
  }
  if(this.route.url==='/about'){
    this.showval="About Us"
  }else if(this.route.url==='/contact'){
this.showval="Contact Us"
  }
  if(this.route.url==='/gallery'){
    this.showval="Gallery"
  }else {

  }
}
}
