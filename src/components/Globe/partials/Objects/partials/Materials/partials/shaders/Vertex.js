export let vertexShaderAtmosphere = `
varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
  vertexUV = uv;
  vertexNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}

`;

export let vertexShaderAtmosphereGlow = `
varying vec3 vertexNormal;

void main() {
  vertexNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}

`;
