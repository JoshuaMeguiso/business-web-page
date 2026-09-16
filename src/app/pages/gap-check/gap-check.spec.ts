import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapCheck } from './gap-check';

describe('GapCheck', () => {
  let component: GapCheck;
  let fixture: ComponentFixture<GapCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GapCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GapCheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
