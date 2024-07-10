import { Component } from '@angular/core';
import { StringHandler } from 'src/app/Utility/stringhandler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = StringHandler.pageTitle;
}