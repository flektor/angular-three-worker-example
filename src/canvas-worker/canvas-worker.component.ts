import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RendererService, RendererWorkerParams } from 'src/service/renderer.service';

@Component({
  selector: 'ngx-canvas-worker',
  template: "<canvas #canvas width='{{width}}' height='{{height}}'> </canvas>"

})
export class CanvasWorkerComponent implements AfterViewInit {

  @Input() width: number;
  @Input() height: number;

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  constructor(private renderer: RendererService) {
  }


  ngAfterViewInit() {
    const offscreen = this.canvas.nativeElement.transferControlToOffscreen();

    const params: RendererWorkerParams = {
      canvas: offscreen,
      aspect: window.innerWidth / window.innerHeight

    }
    this.renderer.initRenderer(params, offscreen);

  }

  async render() {
    const result = await this.renderer.render();
  }


}
