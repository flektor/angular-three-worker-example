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

  constructor(private engine: EngineService) {
  }


  async ngAfterViewInit() {
    const offscreen = this.canvas.nativeElement.transferControlToOffscreen();

    const params: EngineWorkerParams = {
      canvas: offscreen,
      aspect: window.innerWidth / window.innerHeight
    }

    await this.engine.init(params, offscreen);
    this.render();

  }

  async render(): Promise<void> {
    return this.engine.render();
  }


}
