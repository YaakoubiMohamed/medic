import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMedicamenttPage } from './add-medicamentt.page';

describe('AddMedicamenttPage', () => {
  let component: AddMedicamenttPage;
  let fixture: ComponentFixture<AddMedicamenttPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicamenttPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMedicamenttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
