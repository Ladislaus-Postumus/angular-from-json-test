import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Control} from '../json.form.data';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() control!: Control;
  @Input() form!: FormGroup;

  ngOnInit(): void {}
}
