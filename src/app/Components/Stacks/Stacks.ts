import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StringHandler } from "src/app/Utility/StringHandler";


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

  skills: string[] = [
    StringHandler.SkillTagDotNet,
    StringHandler.SkillTagCSharp,
    StringHandler.SkillTagAspNet,
    StringHandler.SkillTagEntityFrameWork,
    StringHandler.SkillTagSQL,
    StringHandler.SkillTagApi,
    StringHandler.SkillTagBlazer,
    StringHandler.SkillTagMVC,
    StringHandler.SkillTagGit,
    StringHandler.SkillTagVue,
    StringHandler.SkillTagDocker,
    StringHandler.SkillTagBootStrap,
    StringHandler.SkillTagTypeScript,
    StringHandler.SkillTagCSS,
    StringHandler.SkillTagHTML,
    StringHandler.SkillTagJavascript,
    StringHandler.SkillTagPostgreSQL,
    StringHandler.SkillTagMysql,
    StringHandler.SkillTagAngular,
    StringHandler.SkillTagKibana,
    StringHandler.SkillTagOctopus,
    StringHandler.SkillTagDapper,
    StringHandler.SkillTagDevops,
    StringHandler.SkillTagKibana,
    StringHandler.SkillTagGithub,
    StringHandler.SkillTagGitlab,
    StringHandler.SkillTagCoPilot,
    StringHandler.SkillTagRedHat,
    StringHandler.SkillTagFedora,
    StringHandler.SkillTagUbuntu,
    StringHandler.SkillTagMac,
    StringHandler.SkillTagYaml,
    StringHandler.SkillTagSwagger,
    StringHandler.SkillTagSQLite,
    StringHandler.SkillTagNPM,
    StringHandler.SkillTagGulp
  ];
}