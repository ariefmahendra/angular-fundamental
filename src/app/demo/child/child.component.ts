import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent{

  @Input() name: string ='';
  @Output() nameCreated = new EventEmitter<{title: string}>
  title: string = '';

  onAddNameChanged(){
    this.nameCreated.emit({title: this.title});
  }
}
