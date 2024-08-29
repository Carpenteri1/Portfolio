export class CardModel {
    title: string;
    text: string;
    url: string;
    tags: string [] = [];
    icon: string;
  
    constructor(title: string, text: string, url: string, tags: string[], icon: string) {
      this.title = title;
      this.text = text;
      this.url = url;
      this.tags = tags;
      this.icon = icon;
    }
  }