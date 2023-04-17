import {ViewEncapsulation , ElementRef, ViewChild, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'startpage-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css']
})
export class StartPageComponent implements AfterViewInit{
  @ViewChild('scrollDotsContainer') scrollDotsContainer!: ElementRef;
  activeIndex: number = 0;

  sections = [
    { id: 'section1', label: 'Section 1' },
    { id: 'section2', label: 'Section 2' },
    { id: 'section3', label: 'Section 3' }
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.createDots();
  }

  createDots() {
  for (let i = 0; i < this.sections.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('scroll-dot');
    dot.addEventListener('click', () => this.scrollTo(i.toString()));
    this.scrollDotsContainer.nativeElement.appendChild(dot);
    };
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}