import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormControl, JsonFormData } from '../../json.form.data';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control!: JsonFormControl;
  @Input() form!: FormGroup;

  constructor() {}
  ngOnInit(): void {}
}
