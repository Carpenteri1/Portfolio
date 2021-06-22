import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'startpage-component',
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class StartPageComponent {

  index = 0;
  currentMessage :string = "";
  textMessage = [ 
    'hello',
    'hey',
    'https://placeimg.com/300/300/nature/8',
    'https://placeimg.com/300/300/nature/9',
    'https://placeimg.com/300/300/nature/2',
    'https://placeimg.com/300/300/nature/3',
    'https://placeimg.com/300/300/nature/1',
  ];

  onChange(idx:any) {
 
  }

}
