import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicamentsPage } from './medicaments.page';

describe('MedicamentsPage', () => {
  let component: MedicamentsPage;
  let fixture: ComponentFixture<MedicamentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicamentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
