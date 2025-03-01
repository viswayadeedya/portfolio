import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ProjectsComponent, BlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
