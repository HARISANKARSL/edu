import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

    isStudentloggedIn(){
      return sessionStorage.getItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865121')!=null;
    }
  isAdminLoggedIn(){
    return sessionStorage.getItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865')!=null;
  }
}
