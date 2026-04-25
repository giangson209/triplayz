const config = {
  color1: "#766FF6",
  pixelSize: 14.0,
  pixelGap: 0.18,
  marginLeft: 120,
  centerY: 0.5,
};

const PIXEL_GRID = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 1, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1,
    1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1,
    1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 1, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
];
const GRID_W = PIXEL_GRID[0].length;
const GRID_H = PIXEL_GRID.length;

// ─── Build THREE.DataTexture from pixel grid ──────────────────────────
function createGridTexture(grid, w, h) {
  const data = new Uint8Array(w * h * 4);
  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      const v = grid[row][col] ? 255 : 0;
      const i = (row * w + col) * 4;
      data[i] = data[i + 1] = data[i + 2] = v;
      data[i + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, w, h, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}

// ─── Trail system ─────────────────────────────────────────────────────
const MAX_TRAIL = 64;
const TRAIL_DURATION = 500;
const TRAIL_MIN_DIST = 3;
let trailPoints = [];

function sampleTrail(x, y) {
  const now = performance.now();
  if (trailPoints.length > 0) {
    const last = trailPoints[0];
    if (Math.hypot(x - last.x, y - last.y) < TRAIL_MIN_DIST) return;
  }
  trailPoints.unshift({ x, y, time: now });
  if (trailPoints.length > MAX_TRAIL) trailPoints.pop();
}

function computeVelocity() {
  if (trailPoints.length < 2) return { x: 0, y: 0 };
  const n = Math.min(5, trailPoints.length);
  let dx = 0,
    dy = 0,
    totalW = 0;
  for (let i = 0; i < n - 1; i++) {
    const a = trailPoints[i],
      b = trailPoints[i + 1];
    const w = 1.0 / (i + 1);
    dx += (a.x - b.x) * w;
    dy += (a.y - b.y) * w;
    totalW += w;
  }
  if (totalW === 0) return { x: 0, y: 0 };
  dx /= totalW;
  dy /= totalW;
  const len = Math.hypot(dx, dy);
  if (len < 0.0001) return { x: 0, y: 0 };
  return { x: dx / len, y: dy / len };
}

function updateTrailUniforms(mat) {
  const now = performance.now();
  trailPoints = trailPoints.filter((p) => now - p.time < TRAIL_DURATION);
  for (let i = 0; i < MAX_TRAIL; i++) {
    if (i < trailPoints.length) {
      const p = trailPoints[i];
      mat.uniforms.uTrailPositions.value[i].set(p.x, p.y);
      mat.uniforms.uTrailAges.value[i] = (now - p.time) / TRAIL_DURATION;
    } else {
      mat.uniforms.uTrailPositions.value[i].set(-9999, -9999);
      mat.uniforms.uTrailAges.value[i] = 1.0;
    }
  }
  mat.uniforms.uTrailCount.value = trailPoints.length;
  const vel = computeVelocity();
  mat.uniforms.uVelocity.value.set(vel.x, vel.y);
}

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ];
}

function createFontAtlas(size) {
  const chars = ["2", "0", "x", "+", "."];
  const canvas = document.createElement("canvas");
  canvas.width = size * chars.length;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `bold ${Math.floor(size * 0.75)}px monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff";
  for (let i = 0; i < chars.length; i++) {
    const cx = i * size + size / 2;
    const cy = size / 2;
    if (chars[i] === ".") {
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.13, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillText(chars[i], cx, cy);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

// ─── Shaders ──────────────────────────────────────────────────────────
const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

const fragmentShader = `
        #define MAX_TRAIL 64

        uniform float iTime;
        uniform vec2  iResolution;
        uniform vec3  uColor1;
        uniform float uPixelSize;
        uniform float uPixelGap;
        uniform sampler2D uFontAtlas;
        uniform vec2  uMousePos;
        uniform float uMouseActive;
        uniform vec2  uVelocity;

        uniform vec2  uTrailPositions[MAX_TRAIL];
        uniform float uTrailAges[MAX_TRAIL];
        uniform int   uTrailCount;

        // Grid texture: r > 0.5 → isShape
        uniform sampler2D uGridTex;
        uniform vec2      uGridDims;   // vec2(GRID_W, GRID_H)
        uniform vec2      uGridCenter; // center position in pixels (screen space)

        uniform vec3 uBgTop;
        uniform vec3 uBgBot;

        varying vec2 vUv;

        vec3 hsl2rgb(float h, float s, float l) {
          float c = (1.0 - abs(2.0 * l - 1.0)) * s;
          float hp = h / 60.0;
          float x = c * (1.0 - abs(mod(hp, 2.0) - 1.0));
          vec3 rgb;
          if      (hp < 1.0) rgb = vec3(c, x, 0.0);
          else if (hp < 2.0) rgb = vec3(x, c, 0.0);
          else if (hp < 3.0) rgb = vec3(0.0, c, x);
          else if (hp < 4.0) rgb = vec3(0.0, x, c);
          else if (hp < 5.0) rgb = vec3(x, 0.0, c);
          else               rgb = vec3(c, 0.0, x);
          return rgb + (l - c * 0.5);
        }

        void main() {
          vec2 cellIndex  = floor(vUv * iResolution / uPixelSize);
          vec2 cellUV     = fract(vUv * iResolution / uPixelSize);
          vec2 cellCenter = (cellIndex + 0.5) * uPixelSize / iResolution;
          vec2 pixelPos   = cellCenter * iResolution;

          // ── Pixel gap mask ────────────────────────────────────────────────
          float gapHalf = uPixelGap * 0.5;
          bool inGap = cellUV.x < gapHalf || cellUV.x > (1.0 - gapHalf) ||
                       cellUV.y < gapHalf || cellUV.y > (1.0 - gapHalf);

          // ── Trail / hover ────────────────────────────────────────────────
          bool  inZone   = false;
          float bestDist = 999.0;
          float bestAge  = 1.0;

          for (int i = 0; i < MAX_TRAIL - 1; i++) {
            if (i >= uTrailCount - 1) break;
            float ageA = uTrailAges[i];
            float ageB = uTrailAges[i + 1];
            if (ageA >= 1.0 && ageB >= 1.0) continue;

            vec2  a    = uTrailPositions[i];
            vec2  b    = uTrailPositions[i + 1];
            vec2  ab   = b - a;
            vec2  ap   = pixelPos - a;
            float len2 = dot(ab, ab);
            float t    = (len2 > 0.0) ? clamp(dot(ap, ab) / len2, 0.0, 1.0) : 0.0;
            vec2  proj = a + t * ab;
            float dist = length((pixelPos - proj) / uPixelSize);
            float age  = mix(ageA, ageB, t);

            if (dist < 1.5) {
              if (!inZone || age < bestAge) {
                inZone   = true;
                bestDist = dist;
                bestAge  = age;
              }
            }
          }

          if (uMouseActive > 0.5) {
            vec2  diff   = pixelPos - uMousePos;
            float dist   = length(diff / uPixelSize);
            float cometR = 2.0;
            if (dist < cometR) {
              float velLen = length(uVelocity);
              float cometMask;
              if (velLen < 0.01) {
                cometMask = smoothstep(0.8, 0.0, dist);
              } else {
                vec2  backward   = -uVelocity;
                vec2  toPixel    = (dist > 0.001) ? normalize(diff) : vec2(0.0);
                float alignment  = dot(toPixel, backward);
                float angleMask  = smoothstep(-0.15, 0.65, alignment);
                float elongation = mix(1.0, 2.2, max(0.0, alignment));
                float distFade   = 1.0 - smoothstep(0.0, cometR * elongation * 0.5, dist);
                float headMask   = smoothstep(0.6, 0.0, dist);
                cometMask = max(headMask, angleMask * distFade);
              }
              if (cometMask > 0.3) {
                if (!inZone || 0.0 < bestAge) {
                  inZone   = true;
                  bestDist = dist;
                  bestAge  = 0.0;
                }
              }
            }
          }

          // ── Grid texture lookup ──────────────────────────────────────────
          // uGridCenter is in screen pixels (Y flipped: 0 = bottom)
          // Total grid size in pixels:
          vec2 gridSizePx = uGridDims * uPixelSize;
          // Top-left corner of the grid in cell-index space:
          vec2 gridOriginCell = floor((uGridCenter - gridSizePx * 0.5) / uPixelSize);

          vec2 localCell = cellIndex - gridOriginCell;
          bool isShape   = false;

          if (localCell.x >= 0.0 && localCell.x < uGridDims.x &&
              localCell.y >= 0.0 && localCell.y < uGridDims.y) {
            // Grid texture row 0 = top of logo; screen Y 0 = bottom → flip Y
            vec2 tc = vec2(
              (localCell.x + 0.5) / uGridDims.x,
              1.0 - (localCell.y + 0.5) / uGridDims.y
            );
            isShape = (texture2D(uGridTex, tc).r > 0.5);
          }

          // ── Background ───────────────────────────────────────────────────
          vec3 bgColor = mix(uBgBot, uBgTop, vUv.y);

          if (inGap) { gl_FragColor = vec4(bgColor, 1.0); return; }

          // ── Final color ──────────────────────────────────────────────────
          if (!inZone) {
            gl_FragColor = isShape ? vec4(uColor1, 1.0) : vec4(bgColor, 1.0);
            return;
          }

          float seqPos = bestAge * 6.0;
          if (seqPos >= 5.0) {
            gl_FragColor = isShape ? vec4(uColor1, 1.0) : vec4(bgColor, 1.0);
            return;
          }

          int digitIndex = int(floor(seqPos));
          vec2 innerUV   = (cellUV - gapHalf) / (1.0 - uPixelGap);
          float atlasX   = (float(digitIndex) + innerUV.x) / 5.0;
          float glyphAlpha = texture2D(uFontAtlas, vec2(atlasX, innerUV.y)).r;

          vec3 digitColor;
          if (isShape) {
            if      (digitIndex == 0) digitColor = hsl2rgb(161.0, 0.85, 0.50);
            else if (digitIndex == 1) digitColor = hsl2rgb(201.0, 1.00, 0.80);
            else if (digitIndex == 2) digitColor = hsl2rgb( 65.0, 1.00, 0.87);
            else if (digitIndex == 3) digitColor = vec3(0.996);
            else                      digitColor = uColor1;
          } else {
            digitColor = uColor1;
          }

          gl_FragColor = vec4(mix(bgColor, digitColor, glyphAlpha), 1.0);
        }
      `;

// ─── Init ─────────────────────────────────────────────────────────────
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const wrapper = document.querySelector(".gradient-canvas");

const DPR = Math.min(window.devicePixelRatio, 2);
const physicalPixelSize = Math.round(config.pixelSize * DPR);

function physicalRes() {
  return {
    w: Math.round(window.innerWidth * DPR),
    h: Math.round(window.innerHeight * DPR),
  };
}

const { w: initW, h: initH } = physicalRes();
renderer.setSize(initW, initH, false);
renderer.setPixelRatio(1);
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";
wrapper.appendChild(renderer.domElement);

const fontAtlas = createFontAtlas(physicalPixelSize * 4);
const gridTex = createGridTexture(PIXEL_GRID, GRID_W, GRID_H);

function getGridCenter() {
  const { h } = physicalRes();
  const logoWidthPx = GRID_W * physicalPixelSize;
  return new THREE.Vector2(
    config.marginLeft * DPR + logoWidthPx * 0.5,
    h * config.centerY,
  );
}

const material = new THREE.ShaderMaterial({
  uniforms: {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2(initW, initH) },
    uColor1: { value: new THREE.Vector3(...hexToRgb(config.color1)) },
    uPixelSize: { value: physicalPixelSize },
    uPixelGap: { value: config.pixelGap },
    uFontAtlas: { value: fontAtlas },
    uMousePos: { value: new THREE.Vector2(-9999, -9999) },
    uMouseActive: { value: 0.0 },
    uVelocity: { value: new THREE.Vector2(0, 0) },
    uTrailPositions: {
      value: Array.from(
        { length: MAX_TRAIL },
        () => new THREE.Vector2(-9999, -9999),
      ),
    },
    uTrailAges: { value: new Array(MAX_TRAIL).fill(1.0) },
    uTrailCount: { value: 0 },
    uGridTex: { value: gridTex },
    uGridDims: { value: new THREE.Vector2(GRID_W, GRID_H) },
    uGridCenter: { value: getGridCenter() },
    uBgTop: { value: new THREE.Vector3(0.2157, 0.1725, 0.3882) },
    uBgBot: { value: new THREE.Vector3(0.0902, 0.0902, 0.1255) },
  },
  vertexShader,
  fragmentShader,
});

const scene = new THREE.Scene();
scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

// ─── Mouse ────────────────────────────────────────────────────────────
const actualMouse = { x: -9999, y: -9999, active: false };
const laggedMouse = { x: -9999, y: -9999 };
const LERP_FACTOR = 0.15;
let lastMoveTime = 0;

document.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  actualMouse.x = (e.clientX - rect.left) * DPR;
  actualMouse.y = (rect.height - (e.clientY - rect.top)) * DPR;
  actualMouse.active = true;
  lastMoveTime = performance.now();
  if (laggedMouse.x === -9999) {
    laggedMouse.x = actualMouse.x;
    laggedMouse.y = actualMouse.y;
  }
});

document.addEventListener("mouseleave", () => {
  actualMouse.active = false;
  material.uniforms.uMouseActive.value = 0.0;
});

// ─── Render loop ──────────────────────────────────────────────────────
(function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  if (actualMouse.active) {
    laggedMouse.x += (actualMouse.x - laggedMouse.x) * LERP_FACTOR;
    laggedMouse.y += (actualMouse.y - laggedMouse.y) * LERP_FACTOR;
    sampleTrail(laggedMouse.x, laggedMouse.y);
    material.uniforms.uMousePos.value.set(laggedMouse.x, laggedMouse.y);
    material.uniforms.uMouseActive.value = 1.0;
  }
  if (lastMoveTime > 0 && now - lastMoveTime > 120) {
    material.uniforms.uMouseActive.value = 0.0;
    lastMoveTime = 0;
    actualMouse.active = false;
  }
  material.uniforms.iTime.value = now * 0.001;
  updateTrailUniforms(material);
  renderer.render(scene, camera);
})();

// ─── Resize ───────────────────────────────────────────────────────────
window.addEventListener("resize", () => {
  const { w, h } = physicalRes();
  renderer.setSize(w, h, false);
  material.uniforms.iResolution.value.set(w, h);
  material.uniforms.uGridCenter.value.copy(getGridCenter());
});
