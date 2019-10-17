import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludaComponent } from './saluda.component';

describe('SaludaComponent', () => {
  let component: SaludaComponent;
  let fixture: ComponentFixture<SaludaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
