import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComptePage } from './compte.page';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ComptePage', () => {
  let component: ComptePage;
  let fixture: ComponentFixture<ComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
