import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Cube, CubeFactory } from '../model/cube'

@Component({
  selector: 'app-stringbox',
  templateUrl: './stringbox.component.html',
  styleUrls: ['./stringbox.component.css']
})
export class StringboxComponent implements OnInit {

  @Input() cube!: Cube;
  @Output() cubeChange: EventEmitter<Cube> = new EventEmitter<Cube>();
  cubeFactory: CubeFactory = new CubeFactory();
  invalid: boolean = false;
  invalidSize: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStringboxChange(event: Event) {
    let value = (<HTMLTextAreaElement>event.target).value;
    this.invalidSize = Math.sqrt(value.length / 6)
    this.invalid = Math.round(this.invalidSize) != this.invalidSize;
    if (this.invalid) {
        return;
    }
    this.cube = this.cubeFactory.parse(value);
    this.cubeChange.emit(this.cube);
  }

}
