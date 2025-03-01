import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule],
})
export class ProjectsComponent {
  hasScrolled = false;
  // @ViewChild('projectsSection', { static: false })
  // projectsSection!: ElementRef<HTMLDivElement>;

  // @ViewChild('heading') heading!: ElementRef;
  // @ViewChild('content') content!: ElementRef;

  loadProjectsSection() {
    // this.projectsSection.nativeElement.classList.remove(
    //   'opacity-0',
    //   'translate-y-100'
    // );
    // this.projectsSection.nativeElement.classList.add(
    //   'opacity-100',
    //   'translate-y-0'
    // );
    // this.heading.nativeElement.classList.remove('opacity-0', 'translate-x-50');
    // this.heading.nativeElement.classList.add('opacity-100', 'translate-x-0');
    // this.content.nativeElement.classList.remove('opacity-0', 'translate-x-50');
    // this.content.nativeElement.classList.add('opacity-100', 'translate-x-0');
  }
}
