import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StringHandler } from "src/app/Utility/StringCollections";

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
  readonly GitHubIcon = StringHandler.GitHubIcon;
  readonly ArrowUpIcon = StringHandler.ArrowUpIcon;
  readonly Title = StringHandler.ProjectTitle;
  readonly ButtonTitle = StringHandler.ProjectButtonTitle;

  projects: Project[] = [
    {
      title: StringHandler.ProjectGridlyTitle,
      description: StringHandler.ProjectDescriptionGridly,
      tech: [
        StringHandler.SkillTagDotNet, 
        StringHandler.SkillTagAngular, 
        StringHandler.SkillTagHTML, 
        StringHandler.SkillTagCSS, 
        StringHandler.SkillTagNPM,
        StringHandler.SkillTagBootStrap,
        StringHandler.SkillTagYaml,
        StringHandler.SkillTagTypeScript,
        StringHandler.SkillTagCSharp,
        StringHandler.SkillTagAspNet,
        StringHandler.SkillTagGulp,
        StringHandler.SkillTagSQL,
        StringHandler.SkillTagSQLite,
        StringHandler.SkillTagApi,
        StringHandler.SkillTagMemoryCashing,
        StringHandler.SkillTagJson,
        StringHandler.SkillTagMediaR
      ],
      github: StringHandler.GitHubLinkGridly,
    },
    {
      title: StringHandler.ProjectPortfolioTitle,
      description: StringHandler.ProjectDescriptionPortolio,
      tech: [
        StringHandler.SkillTagTypeScript, 
        StringHandler.SkillTagAngular, 
        StringHandler.SkillTagHTML, 
        StringHandler.SkillTagCSS, 
        StringHandler.SkillTagNPM,
        StringHandler.SkillTagBootStrap,
        StringHandler.SkillTagYaml],
      github: StringHandler.GitHubLinkPortfolio,
    },
    {
      title: StringHandler.ProjectJukeBoxTitle,
      description: StringHandler.ProjectDescriptionJukeBox,
      tech: [
        StringHandler.SkillTagDotNet,
        StringHandler.SkillTagSwagger,
        StringHandler.SkillTagMediaR,
        StringHandler.SkillTagDapper,
        StringHandler.SkillTagMemoryCashing,
        StringHandler.SkillTagApi,
        StringHandler.SkillTagJson,
        StringHandler.SkillTagCSharp,
        StringHandler.SkillTagSQL,
        StringHandler.SkillTagSQLite,
        StringHandler.SkillTagPoppin
      ],
      github: StringHandler.GitHubLinkJukeBox,
    },
  ];
}