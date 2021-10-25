import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketitemsComponent } from './marketitems.component';

describe('MarketitemsComponent', () => {
  let component: MarketitemsComponent;
  let fixture: ComponentFixture<MarketitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
