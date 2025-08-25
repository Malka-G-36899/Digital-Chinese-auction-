import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitfsAllComponent } from './gitfs-all.component';

describe('GitfsAllComponent', () => {
  let component: GitfsAllComponent;
  let fixture: ComponentFixture<GitfsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitfsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitfsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
