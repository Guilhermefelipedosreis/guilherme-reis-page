import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/main/about/about.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ResumeComponent } from './components/main/resume/resume.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'about',
  pathMatch: 'full'
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'projects',
  component: ProjectsComponent
  },
  {
  path: 'resume',
  component: ResumeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
