import { Component, OnInit } from '@angular/core';
import { StringHandler } from 'src/app/utility/stringhandler';
import { transition, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'typewriter',
  templateUrl: 'typewriter.component.html',
  styleUrls:['typewriter.component.css'],
  animations: 
  [    
      trigger('fade', [
          transition(':enter', [
              style({ opacity: 0 }),
              animate(4000, style({ opacity: 1 }))
          ]),
      ])     
  ]
  
})
export class TypewriterComponent implements OnInit {
  titleOne = StringHandler.stringEmpy;
  titleTwo = StringHandler.stringEmpy;
  //#region Cursor types
  titleTwoCursor = StringHandler.stringEmpy;
  blinkingCursor = StringHandler.typeCursor;
  //#endregion
  private readonly delayTitlesTwo = 90;

  ngOnInit() {
    this.ShowTitleOne(StringHandler.typeWriterTitleOne)
  }

  private ShowTitleOne(titleValue : string) 
  {
    this.titleOne += titleValue;
    setTimeout(() => this.TypeTitleTwo(StringHandler.typeWriterTitleTwo,0), 3000);
  }

  private TypeTitleTwo(titleValue : string, fromIndex : number) {
    if( fromIndex === titleValue.length)
    {
      this.blinkingCursor = StringHandler.typeCursor;
      this.titleTwoCursor = StringHandler.stringEmpy;
      return;
    }
    else if(this.titleTwoCursor === StringHandler.stringEmpy)
    {
      this.blinkingCursor = StringHandler.stringEmpy;
      this.titleTwoCursor = StringHandler.typeCursor;
    }
    this.titleTwo += titleValue[fromIndex];
    fromIndex++;
    setTimeout(() => this.TypeTitleTwo(titleValue,fromIndex), this.delayTitlesTwo);
  }
}
