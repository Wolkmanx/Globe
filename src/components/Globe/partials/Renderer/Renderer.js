import * as THREE from "three";

export function Renderer(container, animation) {
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setAnimationLoop(animation);
  container.appendChild(renderer.domElement);

  return renderer;
}
