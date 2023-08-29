import { Component, OnInit } from "@angular/core";
import { CardModel } from "src/app/Models/CardModel";
import { StringHandler } from "src/app/Utility/stringhandler";

@Component({
    selector: 'cardlayout-component',
    templateUrl: 'cardlayout.component.html',
    styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent implements OnInit {
    currentCardIndex: number = 0;
    cardGroupOne: CardModel[] = [];
    cardGroupTwo: CardModel[] = [];

    ngOnInit() {
    }    

  constructor() {
      this.cardGroupOne.push(
        new CardModel(StringHandler.cardTitleOne, 
        StringHandler.cardDescriptionOne,
        StringHandler.CardLinkOne),
        new CardModel(StringHandler.cardTitleTwo, 
        StringHandler.cardDescriptionTwo,
        StringHandler.CardLinkTwo),
        new CardModel(StringHandler.cardTitleThree, 
        StringHandler.cardDescriptionThree,
        StringHandler.CardLinkThree),
      );
      this.cardGroupTwo.push(
        new CardModel(StringHandler.cardTitleFour, 
        StringHandler.cardDescriptionFour,
        StringHandler.CardLinkFour),
        new CardModel(StringHandler.cardTitleFive, 
        StringHandler.CardLinkFive,
        StringHandler.CardLinkFive),
        new CardModel(StringHandler.cardTitleSix, 
         StringHandler.cardDescriptionSix,
         StringHandler.CardLinkSix),
      );
    }

    navigate(direction: string) {  
        if (direction === StringHandler.left) {
            if(this.currentCardIndex === 0)
                this.currentCardIndex = (this.currentCardIndex + 1);
            else this.currentCardIndex = (this.currentCardIndex - 1);
          } 
          else if (direction === StringHandler.right) 
          {
            if(this.currentCardIndex === 1)
                this.currentCardIndex = (this.currentCardIndex - 1);
            else this.currentCardIndex = (this.currentCardIndex + 1);
          }
      }     
}