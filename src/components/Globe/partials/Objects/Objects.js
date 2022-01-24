import * as THREE from "three";
import { Geometry } from "./partials";
import { Materials } from "./partials";

export function Objects() {
  let globe = new THREE.Mesh(Geometry.globe, Materials.globe);

  let atmosphere = new THREE.Mesh(Geometry.globe, Materials.atmosphere);
  atmosphere.scale.set(1.001, 1.001, 1.001);

  let atmosphereGlow = new THREE.Mesh(Geometry.globe, Materials.atmosphereGlow);
  atmosphereGlow.scale.set(1.1, 1.1, 1.1);

  let atmosphereOutline = new THREE.Mesh(
    Geometry.globe,
    Materials.atmosphereOutline
  );
  atmosphereOutline.scale.set(1.004, 1.004, 1.004);

  return [globe, atmosphere, atmosphereGlow, atmosphereOutline];
}
