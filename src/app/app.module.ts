import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { NgxCanvasWorkerModule } from 'src/canvas-worker/canvas-worker.module';

@NgModule({ 
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    NgxCanvasWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
