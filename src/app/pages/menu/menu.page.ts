import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import {ProfileSetting} from "../../classes/ProflieSetting";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus: Array<ProfileSetting> = [
    {text: 'Mes rendez-vous', icon: 'md-help-buoy', forwardIcon: true},
    {text: 'Mon carnet de soin', icon: 'md-contacts', forwardIcon: true},
    {text: 'Médecins', icon: 'md-chatbubbles', forwardIcon: true},
    {text: 'Mon examen médical', icon: 'md-document', forwardIcon: true},
    {text: 'Pharmacies', icon: 'md-heart', forwardIcon: true},
    {text: 'Laboratoires', icon: 'md-heart', forwardIcon: true},
    {text: 'About Us', icon: 'md-help-buoy', forwardIcon: true},
    {text: 'Contact Us', icon: 'md-contacts', forwardIcon: true},
    {text: 'Tell A Friend', icon: 'md-chatbubbles', forwardIcon: true},
    {text: 'Rate This App', icon: 'md-heart', forwardIcon: true}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuListPage');
  }

  ngOnInit() {
  }

}
