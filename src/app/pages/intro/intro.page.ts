import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { Router } from '@angular/router';
import {SlideInterface} from "../../components/intro-slider/intro-slider.component";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  sliders: Array<SlideInterface> = [{
    title: "Why Use Doctor Online App",
    description: "In-depth and authenticated health articles, informational doctors videos and health forums.",
    imageUrl: "assets/imgs/sample_1.jpg"
  }, {
    title: "Multi Language",
    description: "Friendly and supportive communities and all health information",
    imageUrl: "assets/imgs/sample_2.jpg"
  }, {
    title: "24x7 Healthcare",
    description: "Doctor online  provides you access to all healthcare related information through authenticated sources 24x7 throughout",
    imageUrl: "assets/imgs/sample_3.jpg"
  }, {
    title: "Videos",
    description: "Interactive doc talk and patient talk videos",
    imageUrl: "assets/imgs/sample_4.jpg"
  }];


  constructor(private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams) {

  }
  ngOnInit(){}

  login() {
    this.router.navigate(['/login'])
  }

}
