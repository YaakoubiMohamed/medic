import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../../services/consultation.service';
import { Consultation } from '../../../classes/consultation';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-infocons',
  templateUrl: './infocons.page.html',
  styleUrls: ['./infocons.page.scss'],
})
export class InfoconsPage implements OnInit {

  consultations: Consultation[];
  id:any;

  constructor(
    public firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.id = localStorage.getItem('rdvdate');
    console.log('id',this.id);
    this.getconsultation();
  }

  getconsultation(){
    this.firestore.collection('/rdv')
    .doc(this.id).collection('consultation')
    .snapshotChanges().subscribe(specialite => {
      this.consultations = specialite.map(item => { 
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as Consultation;
      });
      console.log('Consultation',this.consultations)
    });
  }

}
