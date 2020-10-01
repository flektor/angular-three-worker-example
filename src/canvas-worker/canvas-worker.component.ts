import { HostListener } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EngineService, EngineWorkerParams } from 'src/service/engine.service';

@Component({
  selector: 'ngx-canvas-worker',
  template: "<canvas #canvas width='{{width}}' height='{{height}}'> </canvas>"

})
export class CanvasWorkerComponent implements AfterViewInit {

  @Input() width: number;
  @Input() height: number;

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.engine.setCameraPositionFromSize(event.target.innerWidth, event.target.innerHeight);
  }


  constructor(private engine: EngineService) {
  }


  async ngAfterViewInit() {
    const offscreen = this.canvas.nativeElement.transferControlToOffscreen();


    await this.engine.init(offscreen);
    this.render();

  }

  async render(): Promise<void> {
    return this.engine.render();
  }


}
