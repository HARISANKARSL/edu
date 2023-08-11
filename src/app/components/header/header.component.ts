import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isLogedIn=false
  isNavbarScroll=false;
  isSidebarOpen=false;
  adminLogged:boolean=false
constructor(private service:AuthService){}
  @HostListener('window:scroll',['$event'])
    scrollCheck(){
  if(window.pageYOffset>100){
    this.isNavbarScroll=true
  }else{
    this.isNavbarScroll=false
  }
    }
    openSidebar(){
this.isSidebarOpen=true;
document.body.style.setProperty('overflow','hidden')
    }
    closeSidebar(){
this.isSidebarOpen=false;
document.body.style.setProperty('overflow','scroll')
    }

}
  
