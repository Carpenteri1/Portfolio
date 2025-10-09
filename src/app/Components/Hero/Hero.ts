import { Component , OnInit} from "@angular/core";
import { StringHandler } from 'src/app/Utility/StringCollections';
import { transition, style, animate, trigger } from '@angular/animations';


@Component({
  selector: 'Hero-Component',
  templateUrl: './Hero.html',
  standalone: true,
  styleUrls: ['./Hero.css'],
    animations: 
  [    
      trigger('fade', [
          transition(':enter', [
              style({ opacity: 0 }),
              animate(8000, style({ opacity: 1 }))
          ]),
      ])     
  ]
})

export class HeroComponent implements OnInit{
  readonly GitHubPageLink = StringHandler.GitHubPageLink;
  readonly LinkedInPageLink = StringHandler.LinkedInPageLink
  readonly EmailLink = StringHandler.EmailLink;
  readonly GithubLinkTitle = StringHandler.HeroGitHubTitle;
  readonly LinkedInLinkTitle = StringHandler.HeroLinkedInTitle;
  readonly EmailLinkTitle = StringHandler.HeroEmailTitle;
  readonly GitHubIcon = StringHandler.GitHubIcon;
  readonly LinkedInIcon = StringHandler.LinkedInIcon;
  readonly EmailIcon = StringHandler.EmailIcon;
  readonly FirstTitle = StringHandler.HeroFirstTitle;
  readonly SecondTitle = StringHandler.HeroSecondTitle;

  description = StringHandler.stringEmpy;
  //#region Cursor types
  typingCursor = StringHandler.stringEmpy;
  blinkingCursor = StringHandler.typeCursor;
  //#endregion
  private readonly delayTitlesTwo = 90;

  ngOnInit() {
    setTimeout(() => this.TypeTitleTwo(StringHandler.typeWriterTitleTwo,0), 3000);
  }

  private TypeTitleTwo(descriptionValue : string, fromIndex : number) {
    if( fromIndex === descriptionValue.length)
    {
      this.blinkingCursor = StringHandler.typeCursor;
      this.typingCursor = StringHandler.stringEmpy;
      return;
    }
    else if(this.typingCursor === StringHandler.stringEmpy)
    {
      this.blinkingCursor = StringHandler.stringEmpy;
      this.typingCursor = StringHandler.typeCursor;
    }
    this.description += descriptionValue[fromIndex];
    fromIndex++;
    setTimeout(() => this.TypeTitleTwo(descriptionValue,fromIndex), this.delayTitlesTwo);
  }

}