import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { LoginComponent } from './Components/login/login.component';
import { PasswordComponent } from './Components/password/password.component';
import { RegiserComponent } from './Components/regiser/regiser.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { UpdateComponent } from './Components/update/update.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'regiser',component:RegiserComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'password',component:PasswordComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthenticationGuard],  
    children:[
      {path:'getallnotes',component:GetallnotesComponent},
      {path:'createnote',component:GetallnotesComponent},
      {path:'trash',component:TrashComponent},
      {path:'archive',component:ArchiveComponent},
    ],
},
  {path:'displaynote',component:DisplaynoteComponent},
  {path:'icons',component:IconsComponent},
  {path:'update',component:UpdateComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
