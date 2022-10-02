import { Component, OnInit } from '@angular/core';


// import Swiper core and required modules
import SwiperCore, { Pagination, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Cria array com 3 slides
  slides = Array.from({ length: 3 }).map(
    (el, index) => `Slide ${index + 1}`
  );


}
