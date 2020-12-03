// import { Remote, wrap } from 'comlink';
// import { SharedBuffer } from 'src/workers/shared-buffer.worker';

// export class SharedBufferWorkerService {

//     constructor() { }

//     private proxy : Remote<SharedBuffer>;

//     async initWorker(buffer: SharedArrayBuffer) {
//         if (this.proxy) return; 
//         const workerProxy = wrap<typeof import('../workers/shared-buffer.worker').SharedBuffer>(new Worker('../workers/shared-buffer.worker', { type: 'module' }));
//         this.proxy = await new workerProxy();
//         this.proxy.passBuffer(buffer); 
//     }

//     async getRandomData(): Promise<void> { 
//         return this.proxy.getRandomData();
//     }

// }

