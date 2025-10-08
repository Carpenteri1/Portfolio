import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'Stacks-Component',
  templateUrl: './Stacks.html',
  standalone: true,
  styleUrls: ['./Stacks.css'],
  imports: [CommonModule]
})

export class StacksComponent{
  skills: string[] = [
    'C#',
    '.NET Core',
    'ASP.NET',
    'Entity Framework',
    'SQL Server',
    'Azure',
    'REST APIs',
    'Blazor',
    'MAUI',
    'Git',
    'Docker',
    'Microservices',
  ];
}