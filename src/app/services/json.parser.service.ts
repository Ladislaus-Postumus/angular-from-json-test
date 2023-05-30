import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {JsonClass, JsonElement, JsonForm, JsonFormControl, JsonPage} from "../components/json.form.data";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class JsonParserService {
  constructor(private httpClient: HttpClient) {
  }

  public readApp(path: string) {
    let formContents = this.getFormContents(path);
    formContents.subscribe(content => {
      switch (content.class) {
        case JsonClass.FORM:
          let form = <JsonForm>content;
          form.formControls.sort((a, b) => a.order - b.order)
          JsonParserService.toFormGroup(form.formControls);
          break;
        case JsonClass.PAGE:
          let page = <JsonPage>content;
          page.childPages.map(subpage => this.readApp(subpage.path))
          break;
      }
    })
  }

  private getFormContents(name: string): Observable<JsonElement> {
    return this.httpClient
      .get<JsonElement>(name)
  }

  private static toFormGroup(controls: JsonFormControl[]): FormGroup {
    const group: any = {};

    controls.forEach((control) => {
      group[control.key] = control.required ? new FormControl('', Validators.required) : new FormControl('');
    });
    return new FormGroup(group);
  }

  private readStructureJson() {

  }
}
