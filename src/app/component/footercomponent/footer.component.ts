import { Component, NgModule } from "@angular/core";
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
    selector:'footer-component',
    templateUrl:'footer.component.html',
    styleUrls:
    [
      'footer.component.css',
      '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
    ]
})

export class FooterComponent{
  linkedIn = faLinkedin;
  github = faGithubSquare;
}