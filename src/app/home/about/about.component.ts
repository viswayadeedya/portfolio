import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('about', { static: true }) about!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.about) {
        this.about.nativeElement.style.display = 'block';

        this.about.nativeElement.classList.remove(
          'opacity-0',
          '-translate-x-full'
        );
        this.about.nativeElement.classList.add('opacity-100', 'translate-x-0');
      }
    }, 300);

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
