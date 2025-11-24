import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StringHandler } from "src/app/Utility/StringCollections";
import { MapStackModelData } from "../../Utility/StackModelFactory";
import { SkillGroupModel } from "../../Models/SkillGroupModel";
import { MapSkillGroupData } from "../../Utility/SkillGroupFactory";


@Component({
  selector: 'Stacks-Component',
  templateUrl: './Stacks.html',
  standalone: true,
  styleUrls: ['./Stacks.css'],
  imports: [CommonModule]
})

export class StacksComponent{
  readonly TechnologiesTitle = StringHandler.TechnologiesTitle;

  stacks: SkillGroupModel[] = [
    MapSkillGroupData({
      Title: StringHandler.FrameworksTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagDotNet,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagAspNet,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagVue,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagAngular,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagBootStrap,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagEntityFrameWork,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagBlazer,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagMVC,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagWebAPI,Level: 0})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.LanguagesTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagCSharp,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagTypeScript,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagJavascript,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagHTML,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagCSS,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagShell,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagJson,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagYaml,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagGulp,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagSQL,Level: 0})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.DatabasesTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagPostgreSQL,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagMysql,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagSQLite,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagMariaDB,Level: 0})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.DevopsTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagGit,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagGithub,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagGitlab,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagAzure,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagTeamCity,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagOctopus,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagKibana,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagNPM,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagGulp,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagJFrog,Level: 0})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.LibsTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagDapper,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagMediaR,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagSwagger,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagRedisMemoryCashing,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagSeriLog,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagNUnit,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagXUnit,Level: 0}),
        MapStackModelData({Title: StringHandler.SkillTagMoq,Level: 0})
      ]}),
  ];

  getSquareColor(level: number): string {
    if(level >= 4)
      return '.bg-success';
    if(level < 4 && 2)
      return '.bg-warning';

    return '.bg-danger'
  }

}
