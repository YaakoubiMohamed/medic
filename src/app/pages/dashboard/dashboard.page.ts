import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import {NotificationPage} from "../notification/notification.page";
import {MenuListPage} from "../menu-list/menu-list.page";
import {HomePage} from "../home/home.page";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
     
  constructor(private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  //ngOnInit(){}

  ngOnInit() {
    //this.pageReady = true;
    //tst
  }

  medecin(){
    this.router.navigate(['/medecin']);
  }

  rdv(){
    this.router.navigate(['/historique']);
  }

  cons(){
    this.router.navigate(['/consultation']);
  }

}
