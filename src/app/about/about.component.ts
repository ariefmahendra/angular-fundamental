import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  // passing data with event
  name: string = '';

  onKeyPress(event: Event): void {
    this.name = (<HTMLInputElement>event.target).value
  }

}

