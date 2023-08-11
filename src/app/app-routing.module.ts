import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActiveStudentsComponent } from './components/active-students/active-students.component';
import { AuthGuard } from './auth/auth.guard';
import { ActiveAdminComponent } from './components/active-admin/active-admin.component';
import { AdminGuard } from './auth/admin.guard';
import { GalleryComponent } from './components/gallery/gallery.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'faculties',
    component: FacultiesComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:"contact",component:ContactComponent
  },


  {
    path: 'error',
    component: ErrorComponent,
  },
  {
path:'activestudents',component:ActiveStudentsComponent,canActivate:[AuthGuard]
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'activeadmin',component:ActiveAdminComponent,canActivate:[AdminGuard]
      },

  {
    path: '**',
    redirectTo:'/error',pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
