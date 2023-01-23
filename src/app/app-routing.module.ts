import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/main/contact/contact.component';
import { HomeComponent } from './components/main/home/home.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ResumeComponent } from './components/main/resume/resume.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path: 'projects',
  component: ProjectsComponent
  },
  {
  path: 'resume',
  component: ResumeComponent
  },
  {
  path: 'contact',
  component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
