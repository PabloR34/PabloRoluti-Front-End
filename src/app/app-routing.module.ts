import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditestudiosComponent } from './components/estudios/editestudios.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia.component';
import { NewExperienciaComponent } from './components/exp/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';




const router: Routes = [ 
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent }, 
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NewestudiosComponent},
  { path:'editedu/:id', component: EditestudiosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
