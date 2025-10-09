import {Component} from '@angular/core';
import { StringHandler } from 'src/app/Utility/StringHandler';


@Component({
  selector: 'Footer-Component',
  templateUrl: './Footer.html',
  standalone: true,
  styleUrls: [
          './Footer.css',
          '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
  ]
})

export class FooterComponent{
  rightsReserved: string = StringHandler.ReservedTemplate.replace('{year}', new Date().getFullYear().toString());
  readonly GitHubIcon = StringHandler.GitHubIcon;
  readonly LinkedInIcon = StringHandler.LinkedInIcon;
  readonly EmailIcon = StringHandler.EmailIcon;
  readonly Title = StringHandler.FooterTitle;
  readonly Description = StringHandler.FooterDescription;
  readonly GitHubPageLink = StringHandler.GitHubPageLink;
  readonly LinkedInPageLink = StringHandler.LinkedInPageLink;
  readonly EmailLink = StringHandler.EmailLink;
}