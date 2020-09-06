import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillePage } from './ville.page';

describe('VillePage', () => {
  let component: VillePage;
  let fixture: ComponentFixture<VillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
