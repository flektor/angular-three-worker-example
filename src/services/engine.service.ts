import { Injectable } from '@angular/core';
import { Remote, wrap, transfer } from 'comlink';
import { EventProps } from 'src/canvas-worker/canvas-worker.component';
import { Engine } from 'src/workers/engine.worker';


export interface EngineWorkerParams {
  canvas: OffscreenCanvas,
  aspect: number;
}

async function createEngineWorker() {

  const workerProxy = wrap<typeof import('../workers/engine.worker').Engine>(
    new Worker('../workers/engine.worker', { type: 'module', name: 'canvas.worker.js' })
  );

  return await new workerProxy();
}

@Injectable({
  providedIn: 'root',
})
export class EngineService {


  async init(offscreen: OffscreenCanvas): Promise<void> {
    if (this.engine) return;
    this.engine = await createEngineWorker();

    this.engine.init(transfer(offscreen, [offscreen]));
  }


  async render(): Promise<void> {
    this.engine.render();
  }


  async setCameraPositionFromSize(width: number, height: number): Promise<void> {
    this.engine.setCameraPositionFromSize(width, height);
  }


  async initOrbitControls() {
    this.engine.initOrbitControls();
  }


  async dispatchControlsEvent(event: EventProps) {
    this.engine.dispatchControlsEvent(event);
  }

  
  async dispatchControlsParentEvent(event: EventProps) {
    this.engine.dispatchControlsParentEvent(event);
  } 
  

  private engine: Remote<Engine>;

}