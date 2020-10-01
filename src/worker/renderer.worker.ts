
import { expose } from 'comlink';
import { AmbientLight, BoxGeometry, Camera, DirectionalLight, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export class Renderer {

  renderer: WebGLRenderer;
  scene: Scene;
  camera: Camera;

  initRenderer(params: any) { 
    this.renderer = new WebGLRenderer({ canvas: params.canvas, });
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, params.aspect, 0.1, 1000);

    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);

    this.scene.add(new AmbientLight(0x404040));
    this.scene.add(new DirectionalLight(0xffffff, 0.7));

    this.camera.position.z = 5; // τοποθέτηση της κάμερας στον άξο
    this.scene.add(cube);

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

expose(Renderer);
