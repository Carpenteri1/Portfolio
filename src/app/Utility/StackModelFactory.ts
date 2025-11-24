import {StackModel} from "../Models/StackModel";
export function MapStackModelData(model: StackModel) : StackModel{
  return {
    Title : model?.Title ?? "",
    Level : model?.Level ?? 0,
  } as StackModel;
}

MapStackModelData.Override = function(override: Partial<StackModel>, component?: StackModel): StackModel {
  return MapStackModelData({
    Title: override.Title ?? component?.Title ?? "",
    Level: override.Level ??  component?.Level ?? 0,
  } as StackModel);
};
