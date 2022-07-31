import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';

import { BannerComponent } from './components/banner/banner.component';
import { AcercadComponent } from './components/acercad/acercad.component';

import { EstudiosComponent } from './components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './components/exp/exp.component'; 

import { NewExperienciaComponent } from './components/exp/new-experiencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditExperienciaComponent } from './components/exp/edit-experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';
import { EditestudiosComponent } from './components/estudios/editestudios.component';





    
  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    
    BannerComponent,
    AcercadComponent,
   
    EstudiosComponent,
    HysComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    ExperienciaComponent,
    FooterComponent,
    ProyectsComponent,
    NewestudiosComponent,
    EditestudiosComponent,

 
   
    
   
    ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  
  
    
    
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
