import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondyComponent } from './secondy.component';

describe('SecondyComponent', () => {
  let component: SecondyComponent;
  let fixture: ComponentFixture<SecondyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
