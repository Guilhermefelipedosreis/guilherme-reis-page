import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ResumeComponent } from './components/main/resume/resume.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { HomeComponent } from './components/main/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ListMessageComponent } from './components/main/contact/messages/list-message/list-message.component';
import { MessageComponent } from './components/main/contact/messages/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
    ListMessageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
