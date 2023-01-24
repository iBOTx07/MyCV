import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {
  // Event Binding
  showData($event: any) {
    console.log("You've clicked the button!")
    if ($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  
  newTask($event: any){
    console.log("Hi there, you found this button.")
    if ($event){
      console.log($event.target);
      console.log($event.target.value);
    }

  }
}
