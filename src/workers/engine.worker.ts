
import { expose } from 'comlink';
import { ElementLike, ElementListener } from 'src/app/offscreen-orbit-controls/event-listener';
import { OffscreenOrbitControls } from 'src/app/offscreen-orbit-controls/offscreen-orbit-controls';
// import { OffscreenOrbitControls } from 'src/app/offscreen-orbit-controls/offscreen-orbit-controls';
import { EventProps } from 'src/canvas-worker/canvas-worker.component';
import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer, WebGLRendererParameters } from 'three';


export class Engine {

  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
  // controls: OffscreenOrbitControls | { enabled: false } = { enabled: false };
  controls: OffscreenOrbitControls;

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

    this.camera.zoom = 2 * this.getAspect();

    this.renderer.setClearColor(0xffffff);
    this.renderer.render(this.scene, this.camera);
  }


  initOrbitControls() {

    this.parentListener = new ElementListener();
    this.parentListener.clientWidth = this.webGLRendererParams.canvas.width;
    this.parentListener.clientHeight = this.webGLRendererParams.canvas.height;

    this.listener = new ElementListener(this.parentListener);
    this.listener.clientWidth = this.parentListener.clientWidth;
    this.listener.clientHeight = this.parentListener.clientHeight;

    this.controls = new OffscreenOrbitControls(this.camera, this.listener as any, { focus: () => { } });

    this.controls.enabled = true;
    this.controls.update();

  }


  dispatchControlsParentEvent(event: EventProps) {
    event.preventDefault = event.stopPropagation = () => { };
    this.parentListener.dispatchEvent(event as any);
  }


  dispatchControlsEvent(event: EventProps) {
    event.preventDefault = event.stopPropagation = () => { };
    this.listener.dispatchEvent(event as any);
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
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.camera.position.z = 5;

    if (this.controls) {
      this.initOrbitControls();
    }

    this.renderer.render(this.scene, this.camera);
  }


  render() {

    if (this.controls) {
      this.controls.update();
    }

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



  private parentListener: ElementLike;
  private listener: ElementLike;


}

expose(Engine);
