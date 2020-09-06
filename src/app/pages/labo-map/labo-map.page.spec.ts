import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboMapPage } from './labo-map.page';

describe('LaboMapPage', () => {
  let component: LaboMapPage;
  let fixture: ComponentFixture<LaboMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
