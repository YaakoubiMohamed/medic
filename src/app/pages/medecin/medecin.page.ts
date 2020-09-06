import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

import { Router } from '@angular/router';
import { Medecin } from "../../classes/medecin";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-medecin',
  templateUrl: 'medecin.page.html',
  styleUrls: ['medecin.page.scss'],
})
export class MedecinPage  implements OnInit {

  ville:string;
  specialite:string;
  medecins: Medecin[];

  constructor(
    public firestore: AngularFirestore,
    private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams) {
      
  }


  ngOnInit() {
    this.ville = localStorage.getItem('ville');
      this.specialite = localStorage.getItem('specialite');
      console.log('specialite',this.specialite);
      //this.firestore.collection('rdv', ref => ref.where('medecin', '==', id)).snapshotChanges();
      /*
      let search = this.firestore.collection("medecins");
      let query = search.where('ville', '==', this.ville).where('specialite', '==', this.specialite)
      .snapshotChanges().subscribe(specialite => {
        this.medecins = specialite.map(item => { 
          let id = item.payload.doc.id;
          let data = item.payload.doc.data();
          return { id, ...(data as {}) } as Medecin;
        });
      });
      */
      this.firestore.collection('medecins',
       ref => ref.where('ville', '==', this.ville).where('specialite', '==', this.specialite))
      .snapshotChanges().subscribe(specialite => {
        this.medecins = specialite.map(item => { 
          let uid = item.payload.doc.id;
          let data = item.payload.doc.data();
          return { uid, ...(data as {}) } as Medecin;
        });
      });
      
      console.log("specialite list", this.medecins);
  }
  sp(){
    this.router.navigate(['/specialite']);
  }
  country(){
    this.router.navigate(['/ville']);
  }
  currentPlace(){
    
  }

  profile(medecin){
    localStorage.setItem('medecin',JSON.stringify(medecin));
    this.router.navigate(['/profile-med']);
  }

  addrdv(id){
    localStorage.setItem('meduid',id);
    this.router.navigate(['/calendar']);
  }

}
