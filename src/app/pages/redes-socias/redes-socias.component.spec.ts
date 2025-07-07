import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociasComponent } from './redes-socias.component';

describe('RedesSociasComponent', () => {
  let component: RedesSociasComponent;
  let fixture: ComponentFixture<RedesSociasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedesSociasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSociasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
