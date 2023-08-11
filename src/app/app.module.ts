import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/shared/auth/auth.component';
import { EmailComponent } from './components/shared/email/email.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { PhoneComponent } from './components/shared/phone/phone.component';
import { SocialComponent } from './components/shared/social/social.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CoverComponent } from './components/shared/cover/cover.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { ActiveStudentsComponent } from './components/active-students/active-students.component';
import { ActiveAdminComponent } from './components/active-admin/active-admin.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialsComponent } from './components/shared/testimonials/testimonials.component';
import { NgxUiLoaderConfig, NgxUiLoaderModule,NgxUiLoaderRouterModule  } from "ngx-ui-loader";
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#080808",
  "bgsOpacity": 0.2,
  "bgsPosition": "bottom-right",
  "bgsSize": 30,
  "bgsType": "ball-spin-clockwise",
  "blur": 15,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#f5f5f5",
  "fgsPosition": "center-center",
  "fgsSize": 80,
  "fgsType": "ball-spin-clockwise-fade-rotating",
  "gap": 20,
  "logoPosition": "center-center",
  "logoSize": 200,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(24,24,24,0.99)",
  "pbColor": "#fdf6fb",
  "pbDirection": "ltr",
  "pbThickness": 2,
  "hasProgressBar": true,
  "text": "loading.....",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300,

};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthComponent,
    EmailComponent,
    MenuComponent,
    PhoneComponent,
    SocialComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    CoverComponent,
    FacultiesComponent,
    ActiveStudentsComponent,
    ActiveAdminComponent,
    GalleryComponent,
    TestimonialsComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
  
 
    ToastrModule.forRoot(),
      NgbModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
