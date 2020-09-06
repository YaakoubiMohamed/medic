import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Specialite } from '../classes/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  formData: Specialite;
  constructor(private firestore: AngularFirestore) {}

  getSpecialite() {
    return this.firestore.collection("specialites").snapshotChanges();
  }

  ajouterSpecialite(record) {
    return this.firestore.collection('specialites').add(record);
  }

  modifierSpecialite(record) {
    return this.firestore.collection('specialites').doc(record.id).set(record);
  }
}
