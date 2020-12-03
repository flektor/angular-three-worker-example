
import { expose } from 'comlink';
 
export class SharedBuffer {

  private array: Int16Array;
  
  async getRandomData(): Promise<void> {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = Math.random() * 256;
    }
  }

  async passBuffer(buffer: ArrayBuffer): Promise<void> {
    this.array = new Int16Array(buffer); 
  }

}

expose(SharedBuffer);
