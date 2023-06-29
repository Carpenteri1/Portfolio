import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'typewriter',
  templateUrl: 'typewriter.component.html',
  styleUrls:['typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  titleOne = '';
  titleTwo = '';
  textValue = "";
  private readonly delayTitles = 0;//180;
  private readonly delayText = 0;//60;

  ngOnInit() {
    this.TypeTitleOne("Welcome...",0)
  }

  private TypeTitleOne(titleValue : string, fromIndex : number) 
  {
    this.titleOne = titleValue; //+= titleValue[fromIndex];


    //TODO remove this only for fixing css
    this.titleTwo = "I'm Niclas";
    this.textValue = "Software engineer based in Varberg, Sweden. " + 
    "\n I describe myself as a passionate .NET developer, \n" +
    "always keen to explore new technologies and frameworks to help me stay at the forefront. \n" +
    "I have experience in developing both robust and scalable applications for small business and enterprises." 
    //TODO remove this, only for fixing css

    /*
   
    fromIndex++;

    if (fromIndex < titleValue.length)
      setTimeout(() => this.TypeTitleOne(titleValue,fromIndex), this.delayTitles);
    else this.TypeTitleTwo("I'm Niclas",0);*/
  }

  private TypeTitleTwo(titleValue : string, fromIndex : number) {
    this.titleTwo += titleValue[fromIndex];
    fromIndex++;

    if (fromIndex < titleValue.length) 
      setTimeout(() => this.TypeTitleTwo(titleValue,fromIndex), this.delayTitles);
    else this.TypeText("Software engineer based in Varberg, Sweden. " + 
    "\n I describe myself as a passionate .NET developer, \n" +
    "always keen to explore new technologies and frameworks to help me stay at the forefront. \n" +
    "I have experience in developing both robust and scalable applications for small business and enterprises.",0);
  }

  private TypeText(text : string, fromIndex : number) 
  {
    this.textValue += text[fromIndex];
    fromIndex++;

    if (fromIndex < text.length) 
      setTimeout(() => this.TypeText(text,fromIndex), this.delayText);
  }
}
