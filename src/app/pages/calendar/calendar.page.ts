import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  providers: [DatePipe]
})
export class CalendarPage implements OnInit {

  eventSource = [];
  viewTitle: string;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  selectedDate: Date;
 
 
  date: string;
  type: 'string'; 

  constructor(private datePipe: DatePipe,
    public router:Router
    ) { }
 
  ngOnInit() {}
  onChange($event) {
    //console.log($event._d);
    let date = $event._d;
    date = this.datePipe.transform(date, 'yyyy-M-d');
    console.log(date);
    localStorage.setItem('days',date);
    this.router.navigate(['/horaire']);

  }
  horaire(h: Date){
    //console.log(h);
  }

}
