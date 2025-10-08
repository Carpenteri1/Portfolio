import {Component} from '@angular/core';


@Component({
  selector: 'Footer-Component',
  templateUrl: './Footer.html',
  standalone: true,
  styleUrls: []
})

export class FooterComponent{
  currentYear: number = new Date().getFullYear();

}