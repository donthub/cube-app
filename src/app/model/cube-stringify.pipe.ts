import { Pipe, PipeTransform } from '@angular/core';
import { Cube, CubeFactory } from './cube'

@Pipe({name: 'cubeStringify'})
export class CubeStringifyPipe implements PipeTransform {

  cubeFactory: CubeFactory = new CubeFactory();

  transform(cube: Cube): string {
    return this.cubeFactory.print(cube);
  }

}