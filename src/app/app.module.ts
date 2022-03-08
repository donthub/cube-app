import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { StringboxComponent } from './stringbox/stringbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    StringboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
