import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorsAllComponent } from './donators-all.component';

describe('DonatorsAllComponent', () => {
  let component: DonatorsAllComponent;
  let fixture: ComponentFixture<DonatorsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatorsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatorsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
