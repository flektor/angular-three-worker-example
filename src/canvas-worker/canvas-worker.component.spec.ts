import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasWorkerComponent } from './canvas-worker.component';

describe('CanvasWorkerComponent', () => {
  let component: CanvasWorkerComponent;
  let fixture: ComponentFixture<CanvasWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
