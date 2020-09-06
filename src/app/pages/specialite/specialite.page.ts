import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { AngularFirestore } from "@angular/fire/firestore";

import { Router } from '@angular/router';
import { SpecialiteService } from "../../services/specialite.service";
import { Specialite } from "../../classes/specialite";

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.page.html',
  styleUrls: ['./specialite.page.scss'],
})
export class SpecialitePage implements OnInit {
  listItems: Specialite[];

  constructor(
    //public service: SpecialiteService,
    private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestore: AngularFirestore
    ){}

  ngOnInit() {
    
    this.firestore.collection("specialites").snapshotChanges().subscribe(specialite => {
      this.listItems = specialite.map(item => { 
        let id = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { id, ...(data as {}) } as Specialite;
      });
    });
    console.log("specialite list", this.listItems);
    
  }
 

  specialite(item){
    console.log('item',item);
    localStorage.setItem('specialite',item)
    this.router.navigate(['/medecin']);
  } 

}
