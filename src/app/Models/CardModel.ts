export class CardModel {
    title: string;
    text: string;
    url: string;
  
    constructor(title: string, text: string, url: string) {
      this.title = title;
      this.text = text;
      this.url = url;
    }
  }