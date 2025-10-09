import { Component } from '@angular/core';
import { StringHandler } from 'src/app/Utility/StringHandler';
import { FooterComponent } from "./Components/Footer/Footer";
import { ProjectsComponent } from "./Components/Projects/Projects";
import { StacksComponent } from './Components/Stacks/Stacks';
import { HeroComponent } from './Components/Hero/Hero';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [FooterComponent, ProjectsComponent, StacksComponent, HeroComponent],
})
export class AppComponent {
  title = StringHandler.pageTitle;
}