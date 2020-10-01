
import { expose } from 'comlink';
import { EngineWorkerParams } from 'src/service/engine.service';
import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export class Engine {

  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
  canvas: OffscreenCanvas;

  init(canvas: OffscreenCanvas) {
    this.canvas = canvas;
    this.renderer = new WebGLRenderer({ canvas: canvas, });
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, this.getAspect(), 0.1, 1000);
    const geometry = new BoxGeometry();
    const material = new MeshPhongMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    this.scene.add(cube);

    this.scene.add(new AmbientLight(0x404040));
    this.scene.add(new DirectionalLight(0xffffff, 0.7));


    this.setCameraPositionFromSize(canvas.width, canvas.height);

    this.renderer.setClearColor(0xffffff);

    this.renderer.render(this.scene, this.camera);
  }

  getAspect(): number {
    return this.canvas.width / this.canvas.height;
  }

  setCameraPositionFromSize(width: number, height: number) {

    this.canvas.width = width;
    this.canvas.height = height;
    this.renderer = new WebGLRenderer({ canvas: this.canvas });
    this.renderer.setClearColor(0xffffff);

    const aspect = this.getAspect();
    this.camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.z = 5;
    this.camera.zoom = 2 * aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);

  }


  render() {

    this.rotateChildren();

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => this.render());

  }

  private rotateChildren() {
    for (const child of this.scene.children) {

      if (!(child instanceof Mesh)) continue;

      child.rotateX(Math.PI * 0.0015);
      child.rotateY(Math.PI * 0.002);
      child.rotateZ(Math.PI * 0.005);
    }
  }

}

expose(Engine);
