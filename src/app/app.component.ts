import { Component } from '@angular/core';
import { StringHandler } from './Utility/stringhandler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = StringHandler.pageTitle;
}