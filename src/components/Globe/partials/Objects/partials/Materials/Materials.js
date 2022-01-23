import * as THREE from "three";
import globeTexture from "./partials/textures/globe-texture.jpg";
import globeTextureNormal from "./partials/textures/globe-texture-normal.jpg";
import globeTextureSpecular from "./partials/textures/globe-texture-specular.jpg";

export let Materials = {
  globe: new THREE.MeshPhongMaterial({
    shininess: 3,
    map: new THREE.TextureLoader().load(globeTexture),
    normalMap: new THREE.TextureLoader().load(globeTextureNormal),
    specularMap: new THREE.TextureLoader().load(globeTextureSpecular),
  }),
};
