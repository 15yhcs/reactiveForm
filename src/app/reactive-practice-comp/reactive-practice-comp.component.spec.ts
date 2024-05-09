import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePracticeCompComponent } from './reactive-practice-comp.component';

describe('ReactivePracticeCompComponent', () => {
  let component: ReactivePracticeCompComponent;
  let fixture: ComponentFixture<ReactivePracticeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePracticeCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivePracticeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
