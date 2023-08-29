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
  private readonly delayTitles = 180;
  private readonly delayText = 60;

  ngOnInit() {
    this.TypeTitleOne(StringHandler.typeWriterTitleOne,0)
  }

  private TypeTitleOne(titleValue : string, fromIndex : number) 
  {
    this.titleOne += titleValue[fromIndex];
    fromIndex++;

    if (fromIndex < titleValue.length)
      setTimeout(() => this.TypeTitleOne(titleValue,fromIndex), this.delayTitles);
    else this.TypeTitleTwo(StringHandler.typeWriterTitleTwo,0);
  }

  private TypeTitleTwo(titleValue : string, fromIndex : number) {
    this.titleTwo += titleValue[fromIndex];
    fromIndex++;

    if (fromIndex < titleValue.length) 
      setTimeout(() => this.TypeTitleTwo(titleValue,fromIndex), this.delayTitles);
    else this.TypeText(StringHandler.typeWriterText,0);
  }

  private TypeText(text : string, fromIndex : number) 
  {
    this.textValue += text[fromIndex];
    fromIndex++;

    if (fromIndex < text.length) 
      setTimeout(() => this.TypeText(text,fromIndex), this.delayText);
  }
}
