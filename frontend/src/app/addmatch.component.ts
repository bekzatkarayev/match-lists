import { Component } from '@angular/core'

@Component({
  selector: 'addmatch',
  templateUrl: './addmatch.component.html'
})

export class AddMatchComponent {
  date: any;
  league: any;
  team1: any;
  team2: any;
  
  post(date: any) {
    console.log(date);
  }
}
