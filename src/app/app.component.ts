import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  


  showValueFromNavbar: boolean = false
  passToMain(event: any){
    this.showValueFromNavbar = event
  }
}
