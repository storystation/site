import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameModuleComponent } from './card-game-module.component';

describe('CardGameModuleComponent', () => {
  let component: CardGameModuleComponent;
  let fixture: ComponentFixture<CardGameModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGameModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGameModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
