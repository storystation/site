import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameFateComponent } from './card-game-fate.component';

describe('CardGameFateComponent', () => {
  let component: CardGameFateComponent;
  let fixture: ComponentFixture<CardGameFateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGameFateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGameFateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
