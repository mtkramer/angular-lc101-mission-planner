import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  editing: string;

  constructor() { }

  addExperiment(experiment): void {
    this.experiments.push(experiment);
  }

  editExperiment(experiment): void {
    let index = this.experiments.indexOf(this.editing);
    this.experiments[index] = experiment;
    this.editing = '';
  }

  ngOnInit() {
  }

}
