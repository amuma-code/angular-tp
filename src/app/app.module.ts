import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './pere/fils/fils.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './add/add.component';
import {HttpClientModule} from '@angular/common/http';
import { SousseComponent } from './sousse/sousse.component';


@NgModule({
  declarations: [
    AppComponent,
    PereComponent,
    FilsComponent,
    StudentsComponent,
    NavbarComponent,
    FooterComponent,
    AddComponent,
    SousseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
