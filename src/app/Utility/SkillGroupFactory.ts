import {SkillGroupModel} from "../Models/SkillGroupModel";
export function MapSkillGroupData(model: SkillGroupModel) : SkillGroupModel{
  return {
    Title: model?.Title ?? "",
    Stacks: model?.Stacks ?? [],
  } as SkillGroupModel;
}

MapSkillGroupData.Override = function(override: Partial<SkillGroupModel>, model?: SkillGroupModel): SkillGroupModel {
  return MapSkillGroupData({
    Title: override.Title ?? model?.Title ?? "",
    Stacks: override.Stacks ??  model?.Stacks ?? [],
  } as SkillGroupModel);
};
