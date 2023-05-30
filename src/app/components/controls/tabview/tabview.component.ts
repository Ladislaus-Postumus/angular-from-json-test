import {Component, Input} from '@angular/core';
import {Tab} from "../../json.form.data";

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css']
})
export class TabviewComponent {
  @Input() tab!: Tab;

}
