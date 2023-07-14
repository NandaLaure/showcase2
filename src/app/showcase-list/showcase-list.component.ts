import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss']
})
export class ShowcaseListComponent {
  showShowcaseList:boolean = false
  showAboutShowcase:boolean = true
  users = [
    {
      username : 'Jane',
      age : 18,
      gender : 'female',
      profession : 'student'
    },
    {
      username : 'Jane',
      age : 18,
      gender : 'female',
      profession : 'student'
    },
    {
      username : 'Jane',
      age : 18,
      gender : 'female',
      profession : 'student'
    },
  ]
}
