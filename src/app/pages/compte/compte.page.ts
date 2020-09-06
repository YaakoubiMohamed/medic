import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { MbscDatetimeOptions } from '../lib/mobiscroll/js/mobiscroll.angular.min.js';
import { AngularFirestore } from "@angular/fire/firestore";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  user:any;
  modalTitle: string;
  modelId: number;
  compteForm: FormGroup;
  progression: number; 

  constructor(public router: Router,
    private navCtrl: NavController,
    public fb: FormBuilder,
    public firestore: AngularFirestore,) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentuser'));
    console.log('user',this.user);
    this.compteForm = this.fb.group({
      adresse: [this.user.adresse],
      telephone: [this.user.telephone],
      ville: [this.user.ville],
      date: [this.user.date],
    })
  }

  goBack() {
    this.navCtrl.back();
    }
    
  formSubmit() {
    if (!this.compteForm.valid) {
      return false;
    } else {
      //this.compteForm.progression = 0;
      console.log(this.compteForm.value);
       this.progression = 0;
       this.firestore.collection('patients').doc(this.user.uid).update(this.compteForm.value).then(res => {
        console.log("res",res);
        this.compteForm.reset();
        this.router.navigate(['/dashboard/profile']);
      },error => console.log(error));
       // .catch(error => console.log(error));
       
    }
  }

}
