import { Component, OnInit } from '@angular/core';
import { HoraireService } from '../../../services/horaire.service';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Horaire } from "../../../classes/horaire";
import { RendezVous } from "../../../classes/rendez-vous";
import { RdvService } from '../../../services/rdv.service';
//import { SMS } from '@ionic-native/sms/ngx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.page.html',
  styleUrls: ['./horaire.page.scss'],
  providers: [DatePipe]
})
export class HorairePage implements OnInit {

  horaires: Horaire[];
  id:any;
  day:any;
  user:any;

  constructor(public afs: AngularFirestore,
    private firestore: AngularFirestore,
    public router: Router,
    //private sms: SMS,
    private datePipe: DatePipe,
    public rdvservice: RdvService,
    public service: HoraireService) { }

  ngOnInit() {
    //this.sms.send('+21620117395', 'Hello world!');
    this.gethoraire(); 
    this.id = localStorage.getItem('meduid');
    this.user = JSON.parse(localStorage.getItem('currentuser'));
    this.day = localStorage.getItem('days');
    console.log('user',this.user);
  }

  gethoraire(){
    this.service.getHoraire().subscribe(specialite => {
      this.horaires = specialite.map(item => { 
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as Horaire;
      });
      console.log(this.horaires)
    });
  }
  addrdv(h){
    let start = this.day +" "+h;
    let date= new Date(start);
    let end = new Date(date.getTime() + (30 * 60 * 1000));
    let record = {};
    record['Subject'] = this.user.nom +" "+this.user.prenom;
    record['patient'] = this.user.uid;
    record['medecin'] = this.id;
    record['StartTime'] = this.datePipe.transform(date, 'yyyy-M-d HH:mm');
    record['EndTime'] = this.datePipe.transform(end, 'yyyy-M-d HH:mm');
    record['etat'] = "actif";
    console.log('record',record);
    this.rdvservice.addRdv(record);
  }
}
