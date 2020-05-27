import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  isFirstMission = false;
  memberBeingEdited: object;

  constructor() { }

  addCrewMember(name): void {
    this.crew.push({ name: name, firstMission: this.isFirstMission });
  }

  removeCrewMember(crewMember: object): void {
    let index = this.crew.indexOf(crewMember);
    this.crew.splice(index, 1);
  }

  editCrewMember(crewMember) {
    this.memberBeingEdited = crewMember;
  }

  save(newName, oldName) {
    oldName.name = newName;
    this.memberBeingEdited = null;
  }

  ngOnInit() {
  }

}
