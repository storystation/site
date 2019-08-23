import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameChoicesComponent } from './card-game-choices.component';

describe('CardGameChoicesComponent', () => {
  let component: CardGameChoicesComponent;
  let fixture: ComponentFixture<CardGameChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGameChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGameChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
