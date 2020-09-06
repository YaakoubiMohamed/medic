import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { Agent } from "../../classes/agent";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
//import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-labos',
  templateUrl: './labos.page.html',
  styleUrls: ['./labos.page.scss'],
})
export class LabosPage implements OnInit {

  agents: Agent[];
  searchForm: FormGroup;
  pats: any;
  ville: string ='';
  searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
  
  constructor(private agentservice: AgentService,
    public navCtrl: NavController,
    public fb: FormBuilder) {
      this.searchControl = new FormControl();
     }

  ngOnInit() {
    this.agentservice.getAgent().subscribe(specialite => {
      this.agents = specialite.map(item => { 
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as Agent;
      });
      console.log('agents liste',this.agents);
    });

    this.searchForm = this.fb.group({
      nom: [''],
      specialite: [''],
      ville: [''],
    });

    /*
    this.setFilteredItems();

    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()).subscribe(search => {

        this.searching = false;
        this.setFilteredItems();

    });
    */
  }

  formSubmit() {
    console.log('form',this.searchForm.value);
    /*
    this.pats = this.agents.filter(
      (thing, i, arr) => arr.findIndex(t => t.nom === thing.nom) === i
    );
    */
    console.log('res',this.pats);
  }

 
onSearchInput(){
    //this.searching = true;
}

filterItems(searchTerm) {
 // return this.agents.filter(item => {
 //   return item.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
 // });
}

setFilteredItems() {
   // this.items = this.filterItems(this.searchTerm);
}

}
