import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingMainComponent } from './banking-main.component';

describe('BankingMainComponent', () => {
  let component: BankingMainComponent;
  let fixture: ComponentFixture<BankingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
