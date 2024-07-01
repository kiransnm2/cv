import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydiagramComponent } from './bodydiagram.component';

describe('BodydiagramComponent', () => {
  let component: BodydiagramComponent;
  let fixture: ComponentFixture<BodydiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodydiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodydiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
