import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NavController} from "@ionic/angular";
import {IonSlides} from '@ionic/angular';


export interface SlideInterface {
  title?: string,
  description?: string,
  imageUrl?: string
}

@Component({
  selector: 'app-intro-slider',
  templateUrl: './intro-slider.component.html',
  styleUrls: ['./intro-slider.component.scss'],
})
export class IntroSliderComponent implements OnInit {

  @ViewChild('IonSlides') slider: IonSlides;
  @Input() slides: Array<SlideInterface>;
  @Output() goToNext: EventEmitter<boolean> = new EventEmitter<boolean>();

  allSlides: Array<SlideInterface>;
  slideIndex = 0;
  pageReady: boolean = false;


  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {

    this.allSlides = this.slides;
    this.pageReady = true;
  }

  async onSlideChanged() {
    this.slideIndex = await this.slider.getActiveIndex();
  }

  goToApp() {
    /** Send back the response to parent that the introSlide is over **/
    this.goToNext.emit(true);
  }

  skip() {
    /** Send back the response to parent that the introSlide is over **/

    this.goToNext.emit(true);
  }
  ngOnInit() {}

}
