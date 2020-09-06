import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.page.html',
  styleUrls: ['./ville.page.scss'],
})
export class VillePage implements OnInit {

  listItems: any;

  constructor(private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.listItems = [
      "Gabès",
      "Sfax",
      "Tunis",
      "jandouba",
      "mahdiya",
      "Mednine"
    ];
  }

  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
     let draggedItem = this.listItems.splice(event.detail.from,1)[0];
     this.listItems.splice(event.detail.to,0,draggedItem)
    //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
    event.detail.complete();
  }

  getList() {
    console.table(this.listItems);
  }

  ngOnInit() {
  }

  ville(item){
    console.log('item',item);
    localStorage.setItem('ville',item)
    this.router.navigate(['/medecin']);
  }

}
