import * as THREE from "three";
import { Geometry } from "./partials";
import { Materials } from "./partials";

export let Objects = {
  globe: new THREE.Mesh(Geometry.globe, Materials.globe),
};
