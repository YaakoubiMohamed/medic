import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoconsPage } from './infocons.page';

describe('InfoconsPage', () => {
  let component: InfoconsPage;
  let fixture: ComponentFixture<InfoconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoconsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
