import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cube, CubeFactory, Square } from '../model/cube'

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  @Input() cube!: Cube;
  @Output() cubeChange: EventEmitter<Cube> = new EventEmitter<Cube>();
  cubeFactory: CubeFactory = new CubeFactory();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectSquare(square: Square): void {
    square.value = square.value % 6 + 1;
    this.cube = this.cubeFactory.copy(this.cube);
    this.cubeChange.emit(this.cube);
  }

}
