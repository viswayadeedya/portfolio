import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blogs = [
    {
      title: '1 blog',
      desc: 'Description',
    },
    {
      title: '2 blog',
      desc: 'Description',
    },
  ];
}
