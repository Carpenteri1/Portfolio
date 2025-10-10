import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StringHandler } from "src/app/Utility/StringCollections";


@Component({
  selector: 'Stacks-Component',
  templateUrl: './Stacks.html',
  standalone: true,
  styleUrls: ['./Stacks.css'],
  imports: [CommonModule]
})

export class StacksComponent{
  readonly BackendTitle = StringHandler.BackEndTitle;
  readonly FrontEndTitle = StringHandler.FrontEndTitle;
  readonly TechnologiesTitle = StringHandler.TechnologiesTitle;

  frameworkSkills: string[] = [
    StringHandler.SkillTagDotNet,
    StringHandler.SkillTagAspNet,
    StringHandler.SkillTagVue,
    StringHandler.SkillTagAngular,
    StringHandler.SkillTagBootStrap,
    StringHandler.SkillTagBlazer,
    StringHandler.SkillTagMVC,
    StringHandler.SkillTagEntityFrameWork
  ];

    languagesSkills: string[] = [
    StringHandler.SkillTagCSharp,
    StringHandler.SkillTagTypeScript,
    StringHandler.SkillTagJavascript,
    StringHandler.SkillTagHTML,
    StringHandler.SkillTagCSS,
    StringHandler.SkillTagShell,
    StringHandler.SkillTagJson,
    StringHandler.SkillTagYaml,
    StringHandler.SkillTagGulp,
    StringHandler.SkillTagSQL
  ];


  databaseSkills: string[] = [
    StringHandler.SkillTagPostgreSQL,
    StringHandler.SkillTagMysql,
    StringHandler.SkillTagSQLite,
    StringHandler.SkillTagMariaDB
  ];

    devopsSkills: string[] = [
      StringHandler.SkillTagGit,
      StringHandler.SkillTagGithub,
      StringHandler.SkillTagGitlab,
      StringHandler.SkillTagTeamCity,
      StringHandler.SkillTagOctopus,
      StringHandler.SkillTagKibana,
      StringHandler.SkillTagNPM,
      StringHandler.SkillTagJFrog
  ];

}