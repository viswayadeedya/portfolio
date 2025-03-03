import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
