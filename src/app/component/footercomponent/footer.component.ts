import { Component } from "@angular/core";
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
    selector:'footer-component',
    templateUrl:'footer.component.html',
    styleUrls:['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class FooterComponent{
  linkedIn = faLinkedin;
  github = faGithubSquare;
}