import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRdvPage } from './add-rdv.page';

describe('AddRdvPage', () => {
  let component: AddRdvPage;
  let fixture: ComponentFixture<AddRdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRdvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
