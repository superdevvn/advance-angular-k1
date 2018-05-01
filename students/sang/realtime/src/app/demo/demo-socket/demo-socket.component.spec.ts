import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSocketComponent } from './demo-socket.component';

describe('DemoSocketComponent', () => {
  let component: DemoSocketComponent;
  let fixture: ComponentFixture<DemoSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
