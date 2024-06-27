export class CardModel {
    title: string;
    text: string;
    url: string;
    tags: string [] = [];
  
    constructor(title: string, text: string, url: string, tags: string[]) {
      this.title = title;
      this.text = text;
      this.url = url;
      this.tags = tags;
    }
  }