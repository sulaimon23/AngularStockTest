import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvescoComponent } from './invesco.component';

describe('InvescoComponent', () => {
  let component: InvescoComponent;
  let fixture: ComponentFixture<InvescoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvescoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
