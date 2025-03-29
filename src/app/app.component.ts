import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StringHandler } from 'src/app/Utility/stringhandler';
import { routes } from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[RouterModule]
})
export class AppComponent {
  title = StringHandler.pageTitle;
}