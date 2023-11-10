import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ContadorPage } from './contador.page';
import { IonicModule } from '@ionic/angular';

describe('ContadorPage', () => {
  let component: ContadorPage;
  let fixture: ComponentFixture<ContadorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ContadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
