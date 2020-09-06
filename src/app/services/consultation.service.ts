
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Consultation } from '../classes/fiche';
import { Analyse } from '../classes/analyse';
import { Ordonance } from '../classes/ordonance';


@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private itemsCollection: AngularFirestoreCollection<Consultation>;

  constructor(private db: AngularFireDatabase,private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Consultation>('medecins');
   }

  public createConsultation(item: any): Promise<DocumentReference> {
    return this.afs.collection('rdv')
    .doc(item.rendez_vous).collection<Consultation>('consultation').add({
      ...item
    });
  }
  public createAnalyse(item: any): Promise<DocumentReference> {
    return this.afs.collection('rdv')
    .doc(item.rendez_vous).collection<Analyse>('analyse').add({
      ...item
    });
  }
  public createOrdonance(item: any): Promise<DocumentReference> {
    return this.afs.collection('rdv')
    .doc(item.rendez_vous).collection<Ordonance>('ordonance').add({
      ...item
    });
  }
  getConsultationList(){
    return this.afs.collection('/rdv')
    .snapshotChanges();
  }

  getConsultation(id) {
    return this.afs.collection('/rdv')
    .doc(id).collection('consultation')
    .snapshotChanges();
  }
  getOrdonance(id) {
    return this.afs.collection('/rdv')
    .doc(id).collection('ordonance')
    .snapshotChanges();
  }
  getAnalyse(id) {
    return this.afs.collection('/rdv')
    .doc(id).collection('analyse')
    .snapshotChanges();
  }
}
