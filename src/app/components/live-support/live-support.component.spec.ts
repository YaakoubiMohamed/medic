import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveSupportComponent } from './live-support.component';

describe('LiveSupportComponent', () => {
  let component: LiveSupportComponent;
  let fixture: ComponentFixture<LiveSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveSupportComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
