import {ViewEncapsulation, Component} from '@angular/core';

@Component({
  selector: 'startpage-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css']
})
export class StartPageComponent   {
  scroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth' });
  }
}