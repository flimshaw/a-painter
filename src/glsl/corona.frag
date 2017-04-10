varying vec2 vUv;

uniform sampler2D noise1;
uniform sampler2D noise2;
uniform vec4 uStarColor;
uniform float uTime;
uniform float uDetailDrawDistance;

void main() {
  float bright = texture2D(noise1, (vUv + vec2((vUv.y*.15) + uTime * .0000121, uTime * .0001)) * vec2(2.0, .13)).b;
  bright *= (texture2D(noise1, (vUv + vec2(uTime * -.0000121, uTime * .0000155)) * vec2(1.0, .13)).g) * 4.0;
  float alpha = texture2D(noise1, (vUv * vec2(2.0, .3)) - vec2(0.0, uTime *-.00014)).b;
  gl_FragColor = pow(vUv.y,3.0) *  texture2D(noise2, vUv + vec2(uTime * -.00002, uTime * .0001)).r * 3.0 * uStarColor * vec4( vec3(bright), alpha );
}
