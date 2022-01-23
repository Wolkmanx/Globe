import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Lights } from "../Lights/Lights";

export function Camera(renderer) {
  let lights = Lights();

  let camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 15;

  camera.add(...lights);

  let cameraControls = new OrbitControls(camera, renderer);
  cameraControls.enableDamping = true;
  cameraControls.dampingFactor = 0.04;
  cameraControls.rotateSpeed = 0.2;

  return { camera, cameraControls };
}
