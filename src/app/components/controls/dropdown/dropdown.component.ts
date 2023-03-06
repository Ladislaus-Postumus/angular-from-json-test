import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormData } from '../../json.form.data';
import { DropDownControl } from './dropdown-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() control!: DropDownControl;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
