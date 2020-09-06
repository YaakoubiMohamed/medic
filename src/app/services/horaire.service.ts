import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  constructor(
    public afs: AngularFirestore,
    private firestore: AngularFirestore,
    public router: Router,
    public afAuth: AngularFireAuth,) {}

    filter() {
            }

  getHoraire() {
    return this.firestore.collection('medecins').doc('2OAw06aJd9OdSjkj9Ic6w7icZDr2').collection('horaire').snapshotChanges();
  }
}
