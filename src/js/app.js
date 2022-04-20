import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as popup from "./modules/play-video.js";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import * as scroll from "./modules/scroll.js"

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

flsFunctions.isWebp();
burger.burger();
popup.popup();
scroll.scrollTo();

new Swiper('.swiper', {
  speed: 400,

  autoplay:{
    delay: 2000,
  },
  breakpoints:{
    951:{
      autoplay: false,
   }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<svg class="swiper-pagination-bullet" width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M9.5 1.90526L1.64545 6.45263V15.5474L9.5 20.0947L17.3546 15.5474V6.45263L9.5 1.90526ZM19 5.5L9.5 0L0 5.5V16.5L9.5 22L19 16.5V5.5Z" fill="white"/>
      </svg>
      `;
  },

}});


