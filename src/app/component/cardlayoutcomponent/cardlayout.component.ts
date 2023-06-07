import { Component, OnInit } from "@angular/core";
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'cardlayout-component',
    templateUrl: 'cardlayout.component.html',
    styleUrls: ['cardlayout.component.css'],
    animations: [
        trigger('slideInOut', [
          transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
          ]),
          transition(':leave', [
            animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
          ])
        ])
      ]
})

export class CardLayoutComponent implements OnInit {
    currentCardIndex: number = 0;
    cardGroupOne: Card[] = [];
    cardGroupTwo: Card[] = [];

    ngOnInit() {
    }    
    //TODO in memory data, removem when offical data is added

    constructor() {
      this.cardGroupOne.push(
        new Card('Card title 1 Group 1', 'image1.jpg', 'Lorem ipsum 1', 'Last updated 3 mins ago'),
        new Card('Card title 2 Group 1', 'image2.jpg', 'Lorem ipsum 2', 'Last updated 5 mins ago'),
        new Card('Card title 3 Group 1', 'image3.jpg', 'Lorem ipsum 3', 'Last updated 10 mins ago'),
        new Card('Card title 4 Group 1', 'image4.jpg', 'Lorem ipsum 4', 'Last updated 15 mins ago')
      );
      this.cardGroupTwo.push(
        new Card('Card title 1 Group 2', 'image1.jpg', 'Lorem ipsum 1', 'Last updated 3 mins ago'),
        new Card('Card title 2 Group 2', 'image2.jpg', 'Lorem ipsum 2', 'Last updated 5 mins ago'),
        new Card('Card title 3 Group 2', 'image3.jpg', 'Lorem ipsum 3', 'Last updated 10 mins ago'),
        new Card('Card title 4 Group 2', 'image4.jpg', 'Lorem ipsum 4', 'Last updated 15 mins ago')
      );
    }

    navigate(direction: string) {  
        if (direction === 'left') {
            if(this.currentCardIndex === 0)
                this.currentCardIndex = (this.currentCardIndex + 1);
            else this.currentCardIndex = (this.currentCardIndex - 1);
          } 
          else if (direction === 'right') 
          {
            if(this.currentCardIndex === 1)
                this.currentCardIndex = (this.currentCardIndex - 1);
            else this.currentCardIndex = (this.currentCardIndex + 1);
          }
      }     
}
//TODO maybe move to model fo
export class Card {
    title: string;
    image: string;
    text: string;
    lastUpdated: string;
  
    constructor(title: string, image: string, text: string, lastUpdated: string) {
      this.title = title;
      this.image = image;
      this.text = text;
      this.lastUpdated = lastUpdated;
    }
  }