import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemuComponent } from './memu.component';

describe('MemuComponent', () => {
  let component: MemuComponent;
  let fixture: ComponentFixture<MemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
