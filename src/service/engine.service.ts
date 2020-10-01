import { Injectable } from '@angular/core';
import { Remote, wrap, transfer } from 'comlink';
import { Engine } from 'src/worker/engine.worker';


export interface EngineWorkerParams {
  canvas: OffscreenCanvas,
  aspect: number;
}

async function createEngineWorker() {

  const workerProxy = wrap<typeof import('../worker/engine.worker').Engine>(
    new Worker('../worker/engine.worker', { type: 'module' })
  );

  return await new workerProxy();
}

@Injectable({
  providedIn: 'root',
})
export class EngineService {

  private engine: Remote<Engine>;

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
}