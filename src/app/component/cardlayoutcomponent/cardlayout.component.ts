import { Component } from "@angular/core";
import { CardModel } from "src/app/Models/CardModel";
import { StringHandler } from "src/app/Utility/stringhandler";

@Component({
  selector: 'cardlayout-component',
  templateUrl: 'cardlayout.component.html',
  styleUrls: ['cardlayout.component.css'],
})

export class CardLayoutComponent {

  constructor() {
    this.cardGroup.push(
      new CardModel(StringHandler.CardTitleNotify,
        StringHandler.CardDescriptionNotify,
        StringHandler.CardLinkNotify, [
          StringHandler.CardTagJava,
          StringHandler.CardTagAndroid],
          StringHandler.AndroidIcon),
      new CardModel(StringHandler.CardTitleSwapi,
        StringHandler.CardDescriptionSwapi,
        StringHandler.CardLinkSwapi,[
          StringHandler.CardTagJavaScript,
          StringHandler.CardTagCSS,
          StringHandler.CardTagHTML,
          StringHandler.CardTagBootStrap],
          StringHandler.StarsIcon),
      new CardModel(StringHandler.CardTitleWeatherApp,
        StringHandler.CardDescriptionWeatherApp,
        StringHandler.CardLinkWeatherApp,[
          StringHandler.CardTagCSharp,
          StringHandler.CardTagJavaScript,
          StringHandler.CardTagCSS,
          StringHandler.CardTagHTML,
          StringHandler.CardTagBootStrap,
          StringHandler.CardTagDotNet],
          StringHandler.CloudIcon),
      new CardModel(StringHandler.CardTitlePortfolio,
        StringHandler.CardDescriptionPortolio,
        StringHandler.CardLinkPortfolio,[
          StringHandler.CardTagAngular,
          StringHandler.CardTagNPM,
          StringHandler.CardTagCSS,
          StringHandler.CardTagTypeScript,
          StringHandler.CardTagHTML],
        StringHandler.BriefCaseIcon),
      new CardModel(StringHandler.CardTitleFallenRock,
        StringHandler.CardDescriptionFallenRock,
        StringHandler.CardLinkFallenRock,[
          StringHandler.CardTagCSharp,
          StringHandler.CardTagDotNet],
          StringHandler.DpadIcon),
      new CardModel(StringHandler.CardTitleKrankenHouse,
        StringHandler.CardDescriptionKrankenHause,
        StringHandler.CardLinkKrankenHause,[
          StringHandler.CardTagCSharp,
          StringHandler.CardTagDotNet],
          StringHandler.CpuIcon),
    );
  }

  cardGroup: CardModel[] = [];

  startIndex: number = 0;
  cardDirectionToSlide = 0;
  visable: boolean = true;

  private slideToLeft = -2000;
  private slideToRight = 2000;
  private slideToCenter = 0;
  private lockArrowButtons: boolean = false;
  private firstIndex = 0;
  private lastIndex = 3;

  GetVisibleCards(): any[] {
    let endIndex = this.startIndex + 3;
    return this.cardGroup.slice(this.startIndex, endIndex);
  }

  ToggleGroup(direction: 'left' | 'right'): void {
    if(!this.lockArrowButtons)
    {
      this.lockArrowButtons = true;
      const cardCount = this.GetVisibleCards().length;

      if (direction === StringHandler.left) {
        setTimeout(() => {
          this.cardDirectionToSlide = this.slideToLeft;
          setTimeout(() => {
            this.indexHandeler(
              this.slideToRight,
              this.lastIndex,
              this.firstIndex);     
            setTimeout(() => {
              this.indexHandeler(this.slideToCenter); 
            }, 400)
          }, 300)
        }, 500)
      } 
      else if (direction === StringHandler.right) 
      {
        setTimeout(() => {
          this.cardDirectionToSlide = this.slideToRight;
          setTimeout(() => {
            this.indexHandeler(
              this.slideToLeft,
              this.lastIndex,
              this.firstIndex)
                setTimeout(() => {
                this.indexHandeler(this.slideToCenter)
              }, 400)
          }, 300)
        }, 500)
      }
      this.lockArrowButtons = false;
    }
  }

  private indexHandeler(slideCardTo:number,startIndexIs?: number,resetIndexTo?: number){
    if(startIndexIs !== undefined && resetIndexTo !== undefined){
      this.visable = false;
      if(this.startIndex === startIndexIs)
        this.startIndex = resetIndexTo!;
      else this.startIndex = startIndexIs!;
    }
    else{
      this.visable = true;
    }
    this.cardDirectionToSlide = slideCardTo;
  }
}