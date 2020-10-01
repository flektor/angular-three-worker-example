import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CanvasWorkerComponent } from './canvas-worker.component';

@NgModule({
    declarations: [ 
        CanvasWorkerComponent,
    ],
    imports: [
        BrowserModule,
    ], exports:[
        CanvasWorkerComponent, 
    ]
})
export class NgxCanvasWorkerModule {}
