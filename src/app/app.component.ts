import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ControlType, Tab} from './components/json.form.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  baseFormPath = '/assets/jsonForms/';
  forms = ['tabs'];
  suffix = '.json';
  hash: Map<string, Tab> = new Map<string, Tab>([]);

  constructor(private httpClient: HttpClient) {
    console.log(this.hash)
  }

  ngOnInit() {
    this.fillMap();
    console.log(this.hash)
  }

  fillMap() {
    this.forms.forEach(form => {
      var foo = this.baseFormPath + form + this.suffix
      console.log(foo);
      this.getFileContents("/assets/jsonForms/empty.json").subscribe((formPage: any) => {
        //formPage.page.sort((a, b) => a.order - b.order)
        this.hash.set(form, formPage)
      })
    })
  }


  getFileContents(name: string): Observable<any> {
    return this.httpClient
      .get<any>(name)
  }
}
