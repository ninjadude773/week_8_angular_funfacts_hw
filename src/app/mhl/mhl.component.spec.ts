import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhlComponent } from './mhl.component';

describe('MhlComponent', () => {
  let component: MhlComponent;
  let fixture: ComponentFixture<MhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
