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
        MapStackModelData({Title: StringHandler.SkillTagDotNet,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagAspNet,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagVue,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagAngular,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagBootStrap,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagEntityFrameWork,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagBlazer,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagMVC,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagWebAPI,Level: 4})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.LanguagesTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagCSharp,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagTypeScript,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagJavascript,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagHTML,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagCSS,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagShell,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagJson,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagYaml,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagGulp,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagSQL,Level: 3})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.DatabasesTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagPostgreSQL,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagMysql,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagSQLite,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagMariaDB,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillSSMS,Level: 2})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.DevopsTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagGit,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagGithub,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagGitlab,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagAzure,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagTeamCity,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagOctopus,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagKibana,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagNPM,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagJFrog,Level: 2})
      ]}),
    MapSkillGroupData({
      Title: StringHandler.LibsTitle,
      Stacks: [
        MapStackModelData({Title: StringHandler.SkillTagDapper,Level: 4}),
        MapStackModelData({Title: StringHandler.SkillTagMediaR,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagSwagger,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagRedisMemoryCashing,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagSeriLog,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagNUnit,Level: 2}),
        MapStackModelData({Title: StringHandler.SkillTagXUnit,Level: 3}),
        MapStackModelData({Title: StringHandler.SkillTagMoq,Level: 1})
      ]}),
  ];

  getSquareColor(level: number): string {
    if(level >= 4)
      return 'bg-success';
    if(level > 2)
      return 'bg-warning';
    
    return 'bg-danger';
  }

  getDotsArray(level: number): number[] {
    return Array.from({ length: level }, (_, i) => i + 1);
  }

}
