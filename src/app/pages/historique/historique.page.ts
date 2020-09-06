import { Component, OnInit } from '@angular/core';
import { RdvService } from '../../services/rdv.service';
import { RendezVous } from "../../classes/rendez-vous";
import { Medecin } from "../../classes/medecin";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  rdvs: RendezVous[];
  medecins: Medecin[];

  constructor(
    public service: RdvService,
    private router: Router,
    public firestore: AngularFirestore,) { }

  ngOnInit() {
    this.getrdv();
    this.getMed();
  }
  getrdv(){
    this.service.getRdv().subscribe(specialite => {
      this.rdvs = specialite.map(item => { 
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as RendezVous;
      });
      console.log('RendezVous',this.rdvs)
    });
  }
  getMed(){
    this.firestore.collection('medecins')
      .snapshotChanges().subscribe(specialite => {
        this.medecins = specialite.map(item => { 
          let uid = item.payload.doc.id;
          let data = item.payload.doc.data();
          return { uid, ...(data as {}) } as Medecin;
        });
        console.log('Medecin',this.medecins);
      });
  }
  info(medecin,rdvdate){
    localStorage.setItem('medecin', JSON.stringify(medecin));
    localStorage.setItem('rdvdate', rdvdate);
    this.router.navigate(['/info']);
  }

}
