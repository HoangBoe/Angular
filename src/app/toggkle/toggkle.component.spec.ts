import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggkleComponent } from './toggkle.component';

describe('ToggkleComponent', () => {
  let component: ToggkleComponent;
  let fixture: ComponentFixture<ToggkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggkleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
