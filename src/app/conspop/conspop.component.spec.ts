import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConspopComponent } from './conspop.component';

describe('ConspopComponent', () => {
  let component: ConspopComponent;
  let fixture: ComponentFixture<ConspopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConspopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConspopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
