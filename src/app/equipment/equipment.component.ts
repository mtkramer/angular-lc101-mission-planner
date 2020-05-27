import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  editing: string;

  constructor() { }

  addItem(item: string): void {
    this.equipment.push(item);
  }

  removeItem(item): void {
    this.equipment.splice(this.equipment.indexOf(item), 1);
  }

  editItem(item): void {
    let index = this.equipment.lastIndexOf(this.editing);
    this.equipment[index] = item;
  }

  ngOnInit() {
  }

}
