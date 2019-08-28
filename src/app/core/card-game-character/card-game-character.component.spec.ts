import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameCharacterComponent } from './card-game-character.component';

describe('CardGameCharacterComponent', () => {
  let component: CardGameCharacterComponent;
  let fixture: ComponentFixture<CardGameCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGameCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGameCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
