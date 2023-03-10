import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  // Interpolation
  aboutContent =
    "Hello I'm Raymond Joseph P. Galupe from Holy Angel University of WD - 302. I am a 3rd year college in Bachelor of Science in Information Technology Major in Web Development. I am currently in my 2nd semester of my 3rd year college.";
  aboutSelf =
    'My goal after graduation is to be able to understand all important things of being a Web Developer and to have a gain experience from IT companies.';

  // Event Binding
  showData($event: any) {
    console.log("I am 20 years old!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  newTask($event: any) {
    console.log('I became an IT student because I love technology and I am also a gamer.');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
