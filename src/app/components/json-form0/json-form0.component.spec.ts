import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonForm0Component } from './json-form0.component';

describe('JsonForm0Component', () => {
  let component: JsonForm0Component;
  let fixture: ComponentFixture<JsonForm0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonForm0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonForm0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
