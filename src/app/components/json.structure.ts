export interface JsonStructure {
  type: string;
  children: JsonForm[];
}

export interface JsonForm{
  header: string;
  path: string;
  order: number;

  visible?: boolean;
  enabled?: boolean;
}
