import { Injectable } from '@angular/core';
import { Remote, wrap, transfer } from 'comlink';
import { Renderer } from 'src/worker/renderer.worker';


export interface RendererWorkerParams {
  canvas: OffscreenCanvas,
  aspect: number;
}

async function createRendererWorker() {

  const workerProxy = wrap<typeof import('../worker/renderer.worker').Renderer>(
    new Worker('../worker/renderer.worker', { type: 'module' })
  );

  return await new workerProxy();
}

@Injectable({
  providedIn: 'root',
})
export class RendererService {

  private worker: Remote<Renderer>;

  async initRenderer(params: RendererWorkerParams, offscreen: OffscreenCanvas): Promise<void> {
    if (this.worker) return;
    this.worker = await createRendererWorker();
  
    this.worker.initRenderer(transfer(params, [offscreen])); 
    this.worker.render();
  }
 
  
  async render(): Promise<void> {
    this.worker.render();
  }
}