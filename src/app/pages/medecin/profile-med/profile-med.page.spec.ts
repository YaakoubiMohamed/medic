import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileMedPage } from './profile-med.page';

describe('ProfileMedPage', () => {
  let component: ProfileMedPage;
  let fixture: ComponentFixture<ProfileMedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
