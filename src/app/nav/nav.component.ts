import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements AfterViewInit {
  @ViewChild('navbar') navbar!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      this.navbar.nativeElement.classList.remove(
        'opacity-0',
        '-translate-y-full'
      );
      this.navbar.nativeElement.classList.add(
        'opacity-100',
        'z-1',
        'translate-y-0'
      );
    }, 300);
  }
}
