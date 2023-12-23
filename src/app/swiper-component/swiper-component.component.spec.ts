import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperComponentComponent } from './swiper-component.component';

describe('SwiperComponentComponent', () => {
  let component: SwiperComponentComponent;
  let fixture: ComponentFixture<SwiperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
