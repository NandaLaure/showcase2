import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  name:string = ""
  job:string = ""
  address:string = ""
  email:string = ""
  phone: string=""
  skills:string = ""
  hobbies:string = ""
  experience:string = ""
  title = 'Mini-CV';
}
