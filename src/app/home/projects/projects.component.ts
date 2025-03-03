import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
