import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  name: string = '';
  title: string = '';

  getData(name: string): void{
    this.name = name;
  }

  onNameChange(event: {title: string}): void{
    this.title = event.title;
  }
}
