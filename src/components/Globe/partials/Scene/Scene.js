import * as THREE from "three";

export function Scene({ camera, objects }) {
  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.add(camera, ...objects);

  return scene;
}
