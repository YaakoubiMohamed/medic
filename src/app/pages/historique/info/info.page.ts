import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  medecin:any;
  user:any;
  rdvdate:any;

  constructor() { }

  ngOnInit() {
    this.medecin = JSON.parse(localStorage.getItem('medecin'));
    this.user = JSON.parse(localStorage.getItem('currentuser'));
    this.rdvdate = localStorage.getItem('rdvdate');
    console.log('user',this.user);
  }

}
