import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-med',
  templateUrl: './profile-med.page.html',
  styleUrls: ['./profile-med.page.scss'],
})
export class ProfileMedPage implements OnInit {

  medecin:any;
  constructor() { }

  ngOnInit() {
    this.medecin = JSON.parse(localStorage.getItem('medecin'));
  }
  

}
