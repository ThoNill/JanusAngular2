/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MutableComponent } from './mutable.component';

describe('MutableComponent', () => {
  let component: MutableComponent;
  let fixture: ComponentFixture<MutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
