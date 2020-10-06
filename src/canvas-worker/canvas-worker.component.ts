import { HostListener } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EngineService } from 'src/service/engine.service';

@Component({
  selector: 'ngx-canvas-worker',
  template: "<canvas #canvas width='{{width}}' height='{{height}}'> </canvas>"

})
export class CanvasWorkerComponent implements AfterViewInit {

  @Input() width: number;
  @Input() height: number;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.engine.setCameraPositionFromSize(event.target.innerWidth, event.target.innerHeight);
  }

  constructor(private engine: EngineService) { }

  async ngAfterViewInit() {
    const offscreen = this.canvas.nativeElement.transferControlToOffscreen();

    await this.engine.init(offscreen);


  

    this.engine.initOrbitControls();

    this.addEventListener('pointermove', true);
    this.addEventListener('pointerup', true);
    


    for (let type of ['keydown', 'contextmenu', 'pointerdown', 'wheel', 'tuchstart', 'touchend', 'touchmove']) {
      this.addEventListener(type);
    }

    this.render();

  }

  private addEventListener(type: string, parent: boolean = false) {
    document.addEventListener(type, event => {

      const eventProps = this.getEventProps(event);
      if (parent) {
        this.engine.dispatchControlsParentEvent(eventProps);
        return;
      }
      this.engine.dispatchControlsEvent(eventProps);

    }, false);
  }

  getEventProps(event: Event): EventProps {
    const eventProps: any = new Object();
    const props = [
      "clientX",
      "clientY",
      "deltaY",
      "keyCode",
      "touches",
      "pointerType",
      "button",
      "ctrlKey",
      "metaKey",
      "shiftKey"
    ];
    for (const key of props) {
      if (event[key] === false || event[key] === undefined) {
        continue;
      }
      eventProps[key] = event[key];
    }
    eventProps.type = event.type;
    return eventProps;
  }



  async render(): Promise<void> {
    return this.engine.render();
  }

}



export interface EventProps {
  clientX?: number;
  clientY?: number;

  deltaY?: number;
  keyCode?: number;
  preventDefault: () => void;
  stopPropagation: () => void;

  touches?: Array<{ pageX: number, pageY: number }>

  pointerType?: 'mouse' | 'pen'

  button?: number;

  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;


}
