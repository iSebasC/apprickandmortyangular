import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptComponent } from './compt.component';

describe('ComptComponent', () => {
  let component: ComptComponent;
  let fixture: ComponentFixture<ComptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
