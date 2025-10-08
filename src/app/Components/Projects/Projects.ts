import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

@Component({
  selector: 'Projects-Component',
  templateUrl: './Projects.html',
  standalone: true,
  styleUrls: ['./Projects.css'],
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce API',
      description:
        'RESTful API built with ASP.NET Core for a full-featured e-commerce platform with authentication, payment processing, and inventory management.',
      tech: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'Azure'],
      github: 'https://github.com/carpenteri1/ecommerce-api',
    },
    {
      title: 'Task Management System',
      description:
        'Full-stack task management application with real-time updates using SignalR and Blazor for the frontend.',
      tech: ['Blazor', 'SignalR', '.NET 8', 'PostgreSQL'],
      github: 'https://github.com/carpenteri1/task-manager',
    },
    {
      title: 'Microservices Architecture',
      description:
        'Distributed microservices system with Docker containers, API Gateway, and event-driven communication.',
      tech: ['Microservices', 'Docker', 'RabbitMQ', 'Azure'],
      github: 'https://github.com/carpenteri1/microservices-demo',
    },
  ];
}