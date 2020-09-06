import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { PatientService } from './patient.service';
import { Patient } from '../classes/patient';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  patients: Patient[];
  grade: string;

  constructor(public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public  router: Router,
    private service: PatientService,) { }

  loginUser(value){
    this.service.getPatient().subscribe(Patient => {
      this.patients = Patient.map(item => {
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as Patient;
      });
      console.log(value);
      this.patients.forEach(x => {
        console.log(x.email);
        console.log(x.password);
      	if((x.email == value.email) && (x.password == value.password))
      	{
      		this.grade = 'patient';
      		localStorage.setItem('currentuser', JSON.stringify(x));
      		localStorage.setItem('grade', this.grade);
      		console.log(this.grade);
          this.router.navigate(['/home']);
      	}
           
        });      	

    });
  }
}
