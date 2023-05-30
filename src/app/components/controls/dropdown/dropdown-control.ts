import {Control} from "../../json.form.data";

export interface DropDownControl extends Control {
  options?: { key: string; value: string }[];
}
