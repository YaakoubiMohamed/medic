import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabosPage } from './labos.page';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LabosPage', () => {
  let component: LabosPage;
  let fixture: ComponentFixture<LabosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LabosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
