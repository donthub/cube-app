import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringboxComponent } from './stringbox.component';

describe('StringboxComponent', () => {
  let component: StringboxComponent;
  let fixture: ComponentFixture<StringboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
