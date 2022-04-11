import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegiserComponent } from './Components/regiser/regiser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { PasswordComponent } from './Components/password/password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './Components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import {MatMenuModule} from '@angular/material/menu';
import { AuthServiceService } from './Services/authService/auth-service.service';
import { FilterPipe } from './pipes/filter.pipe';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    RegiserComponent,
    LoginComponent,
    ForgotComponent,
    PasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    GetallnotesComponent,
    DisplaynoteComponent,
    IconsComponent,
    UpdateComponent,
    TrashComponent,
    ArchiveComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatGridListModule
  ],
  
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
