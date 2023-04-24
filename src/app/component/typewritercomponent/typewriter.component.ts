import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'typewriter',
  template: `
<div class="container">
        <div class="row">
        <h1 class="title">{{ titleOne }}</h1>
        <h1 class="p-4">{{ titleTwo }}</h1>
        </div>
        <div class="row p-3">
          <div class="col-10">
            <p style="font-size: 1em;">{{ textValue }}</p>
          </div>
        </div>
      </div>
  `
})
export class TypewriterComponent implements OnInit {
  titleOne = '';
  titleTwo = '';
  textValue = "";
  private readonly delayTitles = 160;
  private readonly delayText = 50;

  ngOnInit() {
    this.TypeTitleOne("Welcome...",0)
  }

  private TypeTitleOne(titleValue : string, index : number) 
  {
    this.titleOne += titleValue[index];
    index++;

    if (index < titleValue.length)
      setTimeout(() => this.TypeTitleOne(titleValue,index), this.delayTitles);
    else this.TypeTitleTwo("I'm Niclas",0);
  }

  private TypeTitleTwo(titleValue : string, index : number) {
    this.titleTwo += titleValue[index];
    index++;

    if (index < titleValue.length) 
      setTimeout(() => this.TypeTitleTwo(titleValue,index), this.delayTitles);
    else this.TypeText("Software engineer based in Varberg, Sweden " + 
    "I describe myself as a passionate .NET developer," + 
    "always keen to explore new technologies and frameworks to help me stay at the forefront." +
    "I have experience in developing both robust and scalable applications for small business and enterprises.",0);
  }

  private TypeText(text : string, index : number) 
  {
    this.textValue += text[index];
    index++;

    if (index < text.length) 
      setTimeout(() => this.TypeText(text,index), this.delayText);
  }
}
