import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DropDownControl } from '../components/controls/dropdown/dropdown-control';
import { Control } from '../components/json.form.data';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public static toFormGroup(controls: Control[]): FormGroup {
    const group: any = {};

    controls.forEach((control) => {
      group[control.name] = new FormControl('');
    });
    return new FormGroup(group);
  }

  public static fillDropdownControlOptions(control: DropDownControl) {
      //todo
  }
}
