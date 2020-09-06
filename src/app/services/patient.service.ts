import { Injectable } from '@angular/core';
import { Patient } from '../classes/patient';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    public afs: AngularFirestore,
    private firestore: AngularFirestore,
    public router: Router,
    public afAuth: AngularFireAuth,) {}

    filter() {
            }

  getPatient() {
    return this.firestore.collection('patients').snapshotChanges();
  }
}
