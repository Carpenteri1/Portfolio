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
  readonly FrameworkTitle = StringHandler.FrameworksTitle;
  readonly LanguagesTitle = StringHandler.LanguagesTitle;
  readonly DatabasesTitle = StringHandler.DatabasesTitle;
  readonly DevopsTitle = StringHandler.DevopsTitle;
  readonly TechnologiesTitle = StringHandler.TechnologiesTitle;
  readonly LibrariesTitles = StringHandler.LibsTitle;

  frameworkSkills: string[] = [
    StringHandler.SkillTagDotNet,
    StringHandler.SkillTagAspNet,
    StringHandler.SkillTagVue,
    StringHandler.SkillTagAngular,
    StringHandler.SkillTagBootStrap,
    StringHandler.SkillTagEntityFrameWork,
    StringHandler.SkillTagBlazer,
    StringHandler.SkillTagMVC,
    StringHandler.SkillTagWebAPI
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

      libsSkills: string[] = [
      StringHandler.SkillTagDapper,
      StringHandler.SkillTagMediaR,
      StringHandler.SkillTagSwagger,
      StringHandler.SkillTagRedisMemoryCashing,
      StringHandler.SkillTagSeriLog,
      StringHandler.SkillTagNUnit,
      StringHandler.SkillTagXUnit,
      StringHandler.SkillTagMoq
  ];

}