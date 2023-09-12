import { Component, OnInit } from '@angular/core';
import { StringHandler } from 'src/app/Utility/stringhandler';

@Component({
  selector: 'typewriter',
  templateUrl: 'typewriter.component.html',
  styleUrls:['typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  titleOne = StringHandler.stringEmpy;
  titleTwo = StringHandler.stringEmpy;
  textValue = StringHandler.stringEmpy;
  //#region Cursor types
  titleOneCursor = StringHandler.stringEmpy;
  titleTwoCursor = StringHandler.stringEmpy;
  cursor = StringHandler.stringEmpy;
  blinkingCursor = StringHandler.stringEmpy;
  //#endregion
  private readonly delayTitlesOne = 120;
  private readonly delayTitlesTwo = 90;
  private readonly delayText = 60;

  ngOnInit() {
    this.TypeTitleOne(StringHandler.typeWriterTitleOne,0)
  }

  private TypeTitleOne(titleValue : string, fromIndex : number) 
  {
    this.titleOne += titleValue[fromIndex];
    fromIndex++;
    this.titleOneCursor = StringHandler.typeCursor;
    if (fromIndex < titleValue.length)
      setTimeout(() => this.TypeTitleOne(titleValue,fromIndex), this.delayTitlesOne);
    else 
    {
      this.titleOneCursor = StringHandler.stringEmpy;
      this.titleTwoCursor = StringHandler.typeCursor;
      this.TypeTitleTwo(StringHandler.typeWriterTitleTwo,0);
    }
  }

  private TypeTitleTwo(titleValue : string, fromIndex : number) {
    this.titleTwo += titleValue[fromIndex];
    fromIndex++;

    if (fromIndex < titleValue.length) 
      setTimeout(() => this.TypeTitleTwo(titleValue,fromIndex), this.delayTitlesTwo);
    else{
      this.titleTwoCursor = StringHandler.stringEmpy;
      this.TypeText(StringHandler.typeWriterText,0);
    }
  }

  private TypeText(text : string, fromIndex : number) 
  {
    this.textValue += text[fromIndex];
    fromIndex++;

    if (fromIndex < text.length) {
      setTimeout(() => this.TypeText(text,fromIndex), this.delayText);
      this.cursor = StringHandler.typeCursor;
    }
    else{
      this.blinkingCursor = StringHandler.typeCursor;
      this.cursor = StringHandler.stringEmpy;
    }
  }
}
