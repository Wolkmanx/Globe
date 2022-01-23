import * as THREE from "three";

export function Lights() {
  let ambient = new THREE.AmbientLight(0xffffff, 0.5);

  let spotLight1 = new THREE.SpotLight(0xfffcf5, 3);
  spotLight1.position.set(-10, 0, 0);
  spotLight1.decay = 0;
  spotLight1.penumbra = 1;

  return [ambient, spotLight1];
}
