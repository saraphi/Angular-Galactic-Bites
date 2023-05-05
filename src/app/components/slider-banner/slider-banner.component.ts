import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss']
})
export class SliderBannerComponent {
  bannerImages = ["../../../assets/placeholder.png", "https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg", "https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_PaypalVenmo_v2_2236x1040.jpg", "https://graffica.info/wp-content/uploads/2021/01/BK_Rebrand_Stills_Overview_1-1024x576.jpg"];
  i = 0;
  bannerUrl = this.bannerImages[this.i];
  slideLeft() {
    console.log("left");
    if (this.i <= 0) {
      this.i = this.bannerImages.length - 1;
    } else {
      this.i--
    }
    this.bannerUrl = this.bannerImages[this.i];
  }

  slideRight() {
    console.log("right");
    if (this.i >= this.bannerImages.length - 1) {
      this.i = 0;
    } else {
      this.i++;
    }
    this.bannerUrl = this.bannerImages[this.i];
  }
}
