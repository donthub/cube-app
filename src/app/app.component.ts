import { Component } from '@angular/core';
import { Cube, CubeFactory } from './model/cube'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Rubik's Cube App`;
  cube: Cube = new CubeFactory().create();
}
