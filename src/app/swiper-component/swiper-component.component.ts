import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-swiper-component',
  templateUrl: './swiper-component.component.html',
  styleUrls: ['./swiper-component.component.css']
})
export class SwiperComponentComponent implements AfterViewInit{
  @ViewChild('swiperContainer') swiperContainer?: ElementRef;
  

  ngAfterViewInit(): void {
    if (this.swiperContainer) {
      new Swiper(this.swiperContainer.nativeElement, {
        
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop:true,
        slidesPerView: "auto",
      
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  }
}
