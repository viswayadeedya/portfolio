import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('about', { static: true }) about!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.about) {
        // Ensure it is visible before starting animation
        this.about.nativeElement.style.display = 'block';

        this.about.nativeElement.classList.remove(
          'opacity-0',
          '-translate-x-full'
        );
        this.about.nativeElement.classList.add('opacity-100', 'translate-x-0');
      }
    }, 300); // Added 300ms delay to prevent flickering
  }
}
