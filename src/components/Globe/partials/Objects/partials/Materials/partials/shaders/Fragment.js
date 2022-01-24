export let fragmentShaderAtmosphere = `

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
  float intensity = 1.05 - dot(vertexNormal, vec3(-0.5, 0.0, 1.0));
  vec3 atmosphere = vec3(0.0, 0.5, 1.0) * pow(intensity, 4.5);  

  gl_FragColor = vec4(atmosphere, 1);
}
`;

export let fragmentShaderAtmosphereGlow = `

varying vec3 vertexNormal;

void main() {
  float intensity = pow(0.8 - dot(vertexNormal, vec3(-0.1, 0, 1.0)), 3.0);

  gl_FragColor = vec4(vec3(0.0, 0.4, 1.0), 1) * intensity;
}
`;
