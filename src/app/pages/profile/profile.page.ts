import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user:any;
  
  constructor(private router: Router,) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentuser'));
  }
  compte(){
    this.router.navigate(['/compte']);
  }

}
