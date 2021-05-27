import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from '../components/about/about.component';
import {HomeComponent} from '../components/home/home.component';
import {SkillsComponent} from '../components/skills/skills.component';
import {ProjectsComponent} from '../components/projects/projects.component';

const routes: Routes = [{
  path: 'about' , component : AboutComponent
}, {path: '' , component: HomeComponent} ,
  {path: 'skills' , component : SkillsComponent},
  {path: 'project' , component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
