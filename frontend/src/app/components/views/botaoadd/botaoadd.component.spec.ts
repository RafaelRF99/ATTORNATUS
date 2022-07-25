import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoaddComponent } from './botaoadd.component';

describe('BotaoaddComponent', () => {
  let component: BotaoaddComponent;
  let fixture: ComponentFixture<BotaoaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
