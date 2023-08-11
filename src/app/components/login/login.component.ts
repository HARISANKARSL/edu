import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {






  loginForm!:FormGroup


  constructor(private http:HttpClient,private toast:ToastrService,private route:Router){}
  ngOnInit(){
    
    this.loginForm = new FormGroup({
     
     token:new FormControl('f083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865'),
      email:new FormControl('',[Validators.required,Validators.email]),
     
      password:new FormControl('',[Validators.required]),
     });
  
  }
    
    get f(){
      return this.loginForm.controls;
    }

  
login(){

  if(this.loginForm.valid){
    if(this.loginForm.value.email==='admin@gmail.com' && this.loginForm.value.password==="Admin@123"){
      this.toast.success('admin login','Login success')
      sessionStorage.setItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865','admin')
      this.route.navigate(['/home'])
     }else if(this.loginForm.value.email==='student@gmail.com' && this.loginForm.value.password==="Student@123") {
      
      this.toast.success('Students login','Login success')
      sessionStorage.setItem('083258ecbfb14d7a03d2914db2010e217652ceb83333146ba20b7c3aab3f865121','student')
      this.route.navigate(['/home'])
     }else{
      this.toast.error("invalid user","Login Failed")
      setTimeout(() => {
     
       this.loginForm.reset()
      }, 1000);
     }
  }else{
    this.toast.error("Field can't be empty","Login Failed")
  }
  }
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
