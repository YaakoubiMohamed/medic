import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(private router: Router,
    public authService: AuthService,
    public navCtrl: NavController,
    public fb: FormBuilder,
    public navParams: NavParams) {

  }
 
  ngOnInit(){
    localStorage.setItem('ville','Ville')
    localStorage.setItem('specialite','Specialites')
    this.form = this.fb.group({
      email: [''],
      password: [''],
    })
  }
 
 
  loginUser(value){
    this.authService.loginUser(value);
  }
 
  goToRegisterPage(){
    this.router.navigate(['/register'])
    //this.navCtrl.push('/register');
  }

}
