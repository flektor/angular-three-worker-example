
import { expose } from 'comlink';
import { EngineWorkerParams } from 'src/service/engine.service';
import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer, WebGLRendererParameters } from 'three';

export class Engine {

  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera; 
  webGLRendererParams: WebGLRendererParameters

  init(canvas: OffscreenCanvas) {
    if (this.renderer) return;

    this.webGLRendererParams = { canvas: canvas, antialias: true }
    this.renderer = new WebGLRenderer(this.webGLRendererParams);
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
    return this.webGLRendererParams.canvas.width / this.webGLRendererParams.canvas.height;
  }

  setCameraPositionFromSize(width: number, height: number) {

    this.webGLRendererParams.canvas.width = width;
    this.webGLRendererParams.canvas.height = height;
    this.renderer = new WebGLRenderer(this.webGLRendererParams);
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
