import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperTabComponent } from './super-tab.component';

describe('SuperTabComponent', () => {
  let component: SuperTabComponent;
  let fixture: ComponentFixture<SuperTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
