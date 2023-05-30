/**
 * Darstellung von mehreren Forms als {@link TabType}
 */
export interface Tab {
  tabType: TabType;
  forms: Form[]
}

/**
 * Darstellung von Tabs als Accordion (vertikal) oder Tabview (horizontal)
 */
export enum TabType {
  ACCORDION,
  TABS
}

/**
 * Ein Form ist eine Sammlung von Elementen ({@link Control}), gegen das Validatoren laufen können
 */
export interface Form {
  name: string;
  order: number;
  controls: Control[];
}

/**
 * Control: Atomares Element einer Seite
 * Kann sein: {@link ControlType}
 */
export interface Control{
  label: string;
  name: string;
  order: number;
  controlType: ControlType;

  invisible?: boolean;
  enabled?: boolean;
  required?: boolean;
}

/**
 * Type eines {@link Control}
 */
export enum ControlType {
  input,
  dropdown,
}


/*
kfz: tab/ eigenes json
sach: tab/ eigenes json

alle unterkategorien: tab-accordion oder form
 */
