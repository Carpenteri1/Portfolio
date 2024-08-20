import { Component } from "@angular/core";
import { StringHandler } from "src/app/Utility/stringhandler";
  
@Component({
    selector:'footer-component',
    templateUrl:'footer.component.html',
    styleUrls:
    [
      'footer.component.css',
      '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
    ]
})

export class FooterComponent{
  contactMeAt = StringHandler.ContactMeAt;
}