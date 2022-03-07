import { Component, OnInit } from '@angular/core';
import { Cube, CubeFactory, Square } from '../cube'

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  cube: Cube = new CubeFactory().create();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectSquare(square: Square): void {
    square.value++
  }

}
