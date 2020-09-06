import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroSliderComponent } from './intro-slider.component';

describe('IntroSliderComponent', () => {
  let component: IntroSliderComponent;
  let fixture: ComponentFixture<IntroSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroSliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
