import { Camera, Scene, Renderer, Objects } from "./partials";

export function GlobeInit(container) {
  let objects = Objects();
  let renderer = Renderer(container, animation);
  let { camera, cameraControls } = Camera(renderer.domElement);
  let scene = Scene({
    camera: camera,
    objects: [...objects],
  });

  container.appendChild(renderer.domElement);

  function animation() {
    renderer.render(scene, camera);
    cameraControls.update();
  }
}
