import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private route:Router){}
  loggedIn(){
    return sessionStorage.getItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865121' ) ||  sessionStorage.getItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865' )
  }
  logout(){
    sessionStorage.clear()
    this.route.navigate(['/login'])
  }
  isAdminLogged(){
    return sessionStorage.getItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865')
    
   }
   isStudentogged(){
    return sessionStorage.getItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865121')
    
   }
}
