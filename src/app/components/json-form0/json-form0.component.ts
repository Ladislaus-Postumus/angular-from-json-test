import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../json.form.data';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-json-form0',
  templateUrl: './json-form0.component.html',
  styleUrls: ['./json-form0.component.css']
})
export class JsonForm0Component implements OnChanges, OnInit {
  @Input() jsonFormData!: Form;
  form!: FormGroup;

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((!changes['jsonFormData'].firstChange)) {
    }
    this.form = FormService.toFormGroup(this.jsonFormData.controls);
  }

}
