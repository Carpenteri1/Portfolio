import { Component } from "@angular/core";
import { CardModel } from "src/app/Models/CardModel";
import { StringHandler } from "src/app/Utility/stringhandler";

@Component({
  selector: 'cardlayout-component',
  templateUrl: 'cardlayout.component.html',
  styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent {

  cardGroup: CardModel[] = [];
  startIndex: number = 0;
  cardWidth = 0;
  visable: boolean = true;
  lookButtons: boolean = false;

  getVisibleCards(): any[] {
    const startIndex = this.startIndex;
    const endIndex = startIndex + 3;
    return this.cardGroup.slice(startIndex, endIndex);
  }

  toggleGroup(direction: 'left' | 'right'): void {
    if(!this.lookButtons)
    {
      this.lookButtons = true;
      const cardCount = this.getVisibleCards().length;
      if (direction === 'left') {
        setTimeout(() => {
          this.cardWidth = -2000;
          setTimeout(() => {
            this.visable = false;
            this.startIndex = (this.startIndex - 1 + cardCount) % cardCount;
            this.cardWidth = 2000;
            setTimeout(() => {
              this.visable = true;
              this.cardWidth = 0;
            }, 400)
          }, 300)
        }, 500)
      } 
      else if (direction === 'right') 
      {
        setTimeout(() => {
          this.cardWidth = 2000;
          setTimeout(() => {
            this.visable = false;
            this.startIndex = (this.startIndex + 1) % cardCount;
            this.cardWidth = -2000;
               setTimeout(() => {
                this.visable = true;
                this.cardWidth = 0;
              }, 400)
          }, 300)
        }, 500)
      }
      this.lookButtons = false;
    }
  }

  constructor() {
    this.cardGroup.push(
      new CardModel(StringHandler.cardTitleOne,
        StringHandler.cardDescriptionOne,
        StringHandler.CardLinkOne),
      new CardModel(StringHandler.cardTitleTwo,
        StringHandler.cardDescriptionTwo,
        StringHandler.CardLinkTwo),
      new CardModel(StringHandler.cardTitleThree,
        StringHandler.cardDescriptionThree,
        StringHandler.CardLinkThree),
      new CardModel(StringHandler.cardTitleFour,
        StringHandler.cardDescriptionFour,
        StringHandler.CardLinkFour),
      new CardModel(StringHandler.cardTitleFive,
        StringHandler.cardDescriptionFive,
        StringHandler.CardLinkFive),
      new CardModel(StringHandler.cardTitleSix,
        StringHandler.cardDescriptionSix,
        StringHandler.CardLinkSix),
    );
  }
}