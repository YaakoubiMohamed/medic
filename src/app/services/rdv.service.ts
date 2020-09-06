import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  user:any;
  constructor(private firestore: AngularFirestore,) {
    this.user = JSON.parse(localStorage.getItem('currentuser'));
   }

  getRdv() {
    return this.firestore.collection('rdv',
    ref => ref.where('patient', '==', this.user.uid)).snapshotChanges();
  }

  addRdv(record) {
    return this.firestore.collection('rdv').add(record);    
  }
}
