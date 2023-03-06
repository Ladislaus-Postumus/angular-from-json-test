import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { JsonFormData } from './components/json.form.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  baseFormPath = '/assets/jsonForms/';
  forms = ['jsonForm0', 'jsonForm1', 'searchCriteriaFormConfig'];
  suffix = '.json';
  hash: Map<string, JsonFormData> = new Map<string, JsonFormData>([]);

  constructor(private httpClient: HttpClient) {
    console.log(this.hash)
   }

  ngOnInit() {
    this.fillMap();
    console.log(this.hash)
  }

  fillMap() {
    this.forms.forEach(form => {
      this.getFileContents(this.baseFormPath + form + this.suffix).subscribe((formData: any) => {
        var foo: JsonFormData = formData;
        foo.controls.sort((a, b) => a.order - b.order)
        this.hash.set(form, foo)
      })
    })
  }

  getFileContents(name: string) {
    return this.httpClient
      .get(name)
  }
}
