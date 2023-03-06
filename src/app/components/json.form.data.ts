export interface JsonFormData {
  name: string,
  controls: JsonFormControl[]
}

export interface JsonFormControl {
  key: string;
  label: string;
  type: string;
  order: number;

  required?: boolean;
  enabled?: boolean;
  visible?: boolean;
}