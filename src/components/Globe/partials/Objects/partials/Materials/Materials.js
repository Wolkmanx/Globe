import * as THREE from "three";
import {
  vertexShaderAtmosphere,
  fragmentShaderAtmosphere,
  vertexShaderAtmosphereGlow,
  fragmentShaderAtmosphereGlow,
} from "./partials/shaders";
import globeTexture from "./partials/textures/globe-texture.jpg";
import globeTextureNormal from "./partials/textures/globe-texture-normal.jpg";
import globeTextureSpecular from "./partials/textures/globe-texture-specular.jpg";

export let Materials = {
  atmosphere: new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: vertexShaderAtmosphere,
    fragmentShader: fragmentShaderAtmosphere,
    blending: THREE.AdditiveBlending,
    transparent: true,
  }),

  atmosphereGlow: new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: vertexShaderAtmosphereGlow,
    fragmentShader: fragmentShaderAtmosphereGlow,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    transparent: true,
  }),

  atmosphereOutline: new THREE.MeshBasicMaterial({
    color: 0x064775,
    side: THREE.BackSide,
  }),

  globe: new THREE.MeshPhongMaterial({
    shininess: 3,
    map: new THREE.TextureLoader().load(globeTexture),
    normalMap: new THREE.TextureLoader().load(globeTextureNormal),
    specularMap: new THREE.TextureLoader().load(globeTextureSpecular),
    transparent: true,
  }),
};
