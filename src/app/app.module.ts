import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubeStringifyPipe } from './model/cube-stringify.pipe';
import { CubeComponent } from './cube/cube.component';
import { StringboxComponent } from './stringbox/stringbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    StringboxComponent,
    CubeStringifyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
