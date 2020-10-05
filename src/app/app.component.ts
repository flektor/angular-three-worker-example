import { Component } from '@angular/core';
import { SharedBufferWorkerService } from 'src/service/shared-buffer.service';

@Component({
  selector: 'app-root',
  template: '<ngx-canvas-worker width="{{width}}" height="{{height}}"></ngx-canvas-worker>',
})
export class AppComponent {

  title = 'angular-three-worker-example';

  width = window.innerWidth;
  height = window.innerHeight;

  private workerService: SharedBufferWorkerService;
  private buffer: SharedArrayBuffer;

  constructor() {
    this.init(); 
  }

  async init() {
    this.workerService = new SharedBufferWorkerService();

    this.buffer = new SharedArrayBuffer(6); 

    await this.workerService.initWorker(this.buffer);

    this.update();
  }

  update() {
    setTimeout(async () => {
      await this.workerService.getRandomData();
      
      const data = new Int16Array(this.buffer);

      console.log('%c update', `color: rgb(${data[0]}, ${data[1]}, ${data[2]})`);

      this.update();
    }, 1000);
  }
 
}