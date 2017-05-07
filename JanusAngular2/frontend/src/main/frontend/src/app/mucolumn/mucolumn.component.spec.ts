/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MucolumnComponent } from './mucolumn.component';

describe('MucolumnComponent', () => {
  let component: MucolumnComponent;
  let fixture: ComponentFixture<MucolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MucolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MucolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
