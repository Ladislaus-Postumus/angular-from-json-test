import { JsonFormControl, JsonFormData } from "../../json.form.data";

export interface DropDownControl extends JsonFormControl {
  options?: { key: string; value: string }[];
}
