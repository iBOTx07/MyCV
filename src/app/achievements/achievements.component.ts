import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  // Style Binding
  newColor = "gold";
  theColor = "orange"

  // Class Binding
  changeColor="brown";
  colorSwap= false;
  usedColor="cyan";

}
