import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialitePage } from './specialite.page';

describe('SpecialitePage', () => {
  let component: SpecialitePage;
  let fixture: ComponentFixture<SpecialitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
