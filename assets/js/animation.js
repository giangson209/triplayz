(function initPixelatedShader() {
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
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
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

  // ─── Trail system — dùng circular buffer thay vì unshift/filter ───────
  // FIX: unshift() là O(n) mỗi mousemove → circular buffer O(1)
  const MAX_TRAIL = 24; // FIX: giảm từ 64 → 24, giảm ~60% shader workload
  const TRAIL_DURATION = 400; // FIX: giảm từ 500ms → 400ms
  const TRAIL_MIN_DIST = 3;

  // Circular buffer: mỗi entry gồm x, y, time (3 float)
  const _trailBuf = new Float64Array(MAX_TRAIL * 3);
  let _trailHead = 0; // index của slot tiếp theo sẽ ghi
  let _trailLen = 0; // số entry hợp lệ hiện tại

  function trailGet(i) {
    // i=0 là entry mới nhất
    const slot = (_trailHead - 1 - i + MAX_TRAIL * 2) % MAX_TRAIL;
    return {
      x: _trailBuf[slot * 3],
      y: _trailBuf[slot * 3 + 1],
      time: _trailBuf[slot * 3 + 2],
    };
  }

  function sampleTrail(x, y) {
    const now = performance.now();
    if (_trailLen > 0) {
      const last = trailGet(0);
      if (Math.hypot(x - last.x, y - last.y) < TRAIL_MIN_DIST) return;
    }
    _trailBuf[_trailHead * 3] = x;
    _trailBuf[_trailHead * 3 + 1] = y;
    _trailBuf[_trailHead * 3 + 2] = now;
    _trailHead = (_trailHead + 1) % MAX_TRAIL;
    if (_trailLen < MAX_TRAIL) _trailLen++;
  }

  // FIX: reuse object thay vì tạo mới mỗi frame
  const _velOut = { x: 0, y: 0 };

  function computeVelocity() {
    if (_trailLen < 2) {
      _velOut.x = 0;
      _velOut.y = 0;
      return _velOut;
    }
    const n = Math.min(5, _trailLen);
    let dx = 0,
      dy = 0,
      totalW = 0;
    for (let i = 0; i < n - 1; i++) {
      const a = trailGet(i);
      const b = trailGet(i + 1);
      const w = 1.0 / (i + 1);
      dx += (a.x - b.x) * w;
      dy += (a.y - b.y) * w;
      totalW += w;
    }
    if (totalW === 0) {
      _velOut.x = 0;
      _velOut.y = 0;
      return _velOut;
    }
    dx /= totalW;
    dy /= totalW;
    const len = Math.hypot(dx, dy);
    if (len < 0.0001) {
      _velOut.x = 0;
      _velOut.y = 0;
      return _velOut;
    }
    _velOut.x = dx / len;
    _velOut.y = dy / len;
    return _velOut;
  }

  function updateTrailUniforms(mat) {
    const now = performance.now();

    // FIX: expire entries in-place bằng cách giảm _trailLen
    // thay vì filter() tạo array mới mỗi frame
    while (_trailLen > 0) {
      const oldest = trailGet(_trailLen - 1);
      if (now - oldest.time >= TRAIL_DURATION) _trailLen--;
      else break;
    }

    const positions = mat.uniforms.uTrailPositions.value;
    const ages = mat.uniforms.uTrailAges.value;

    for (let i = 0; i < MAX_TRAIL; i++) {
      if (i < _trailLen) {
        const p = trailGet(i);
        positions[i].set(p.x, p.y);
        ages[i] = (now - p.time) / TRAIL_DURATION;
      } else {
        positions[i].set(-9999, -9999);
        ages[i] = 1.0;
      }
    }
    mat.uniforms.uTrailCount.value = _trailLen;

    // FIX: reuse _velOut object
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

  // FIX: MAX_TRAIL giảm từ 64 → 24 trong shader
  // FIX: encode trail vào texture thay vì uniform array
  //      → tránh GLSL unroll 63 iterations mỗi pixel
  //      → GPU texture fetch có hardware cache, nhanh hơn uniform array lớn
  const fragmentShader = `
    #define MAX_TRAIL 24

    uniform float iTime;
    uniform vec2  iResolution;
    uniform vec3  uColor1;
    uniform float uPixelSize;
    uniform float uPixelGap;
    uniform sampler2D uFontAtlas;
    uniform vec2  uMousePos;
    uniform float uMouseActive;
    uniform vec2  uVelocity;

    // FIX: dùng texture thay vì uniform array
    // Layout: mỗi texel = (x_screen, y_screen, age, unused)
    // texture width = MAX_TRAIL, height = 1
    uniform sampler2D uTrailTex;
    uniform int       uTrailCount;

    uniform sampler2D uGridTex;
    uniform vec2      uGridDims;
    uniform vec2      uGridCenter;

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

      float gapHalf = uPixelGap * 0.5;
      bool inGap = cellUV.x < gapHalf || cellUV.x > (1.0 - gapHalf) ||
                   cellUV.y < gapHalf || cellUV.y > (1.0 - gapHalf);

      // ── Trail lookup từ texture ────────────────────────────────────────
      bool  inZone   = false;
      float bestDist = 999.0;
      float bestAge  = 1.0;

      // FIX: thay vì uniform array loop unroll 63×,
      //      dùng texture fetch — số iteration thực tế = uTrailCount
      for (int i = 0; i < MAX_TRAIL - 1; i++) {
        if (i >= uTrailCount - 1) break;

        // Fetch 2 điểm liên tiếp từ trail texture
        // texel.xy = screen pos, texel.z = age [0..1]
        vec4 texA = texture2D(uTrailTex, vec2((float(i)     + 0.5) / float(MAX_TRAIL), 0.5));
        vec4 texB = texture2D(uTrailTex, vec2((float(i + 1) + 0.5) / float(MAX_TRAIL), 0.5));

        // Decode: xy lưu dạng [0..1] mapped từ screen coords
        // x: [0..iResolution.x], y: [0..iResolution.y]
        vec2 a    = texA.xy * iResolution;
        vec2 b    = texB.xy * iResolution;
        float ageA = texA.z;
        float ageB = texB.z;

        if (ageA >= 1.0 && ageB >= 1.0) continue;

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
      vec2 gridSizePx    = uGridDims * uPixelSize;
      vec2 gridOriginCell = floor((uGridCenter - gridSizePx * 0.5) / uPixelSize);
      vec2 localCell     = cellIndex - gridOriginCell;
      bool isShape       = false;

      if (localCell.x >= 0.0 && localCell.x < uGridDims.x &&
          localCell.y >= 0.0 && localCell.y < uGridDims.y) {
        vec2 tc = vec2(
          (localCell.x + 0.5) / uGridDims.x,
          1.0 - (localCell.y + 0.5) / uGridDims.y
        );
        isShape = (texture2D(uGridTex, tc).r > 0.5);
      }

      vec3 bgColor = mix(uBgBot, uBgTop, vUv.y);

      if (inGap) { gl_FragColor = vec4(bgColor, 1.0); return; }

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

  // ─── Trail texture (thay thế uniform array) ───────────────────────────
  // FIX: MAX_TRAIL × 1 pixel RGBA float texture
  // layout: R=x/resW, G=y/resH, B=age, A=unused
  const _trailTexData = new Float32Array(MAX_TRAIL * 4);
  let _trailTex = null; // khởi tạo sau khi có renderer

  function createTrailTexture() {
    const tex = new THREE.DataTexture(
      _trailTexData,
      MAX_TRAIL,
      1,
      THREE.RGBAFormat,
      THREE.FloatType,
    );
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    return tex;
  }

  function updateTrailTexture(mat, resW, resH) {
    const now = performance.now();

    // Expire oldest entries
    while (_trailLen > 0) {
      const oldest = trailGet(_trailLen - 1);
      if (now - oldest.time >= TRAIL_DURATION) _trailLen--;
      else break;
    }

    // Ghi dữ liệu trail vào Float32Array
    for (let i = 0; i < MAX_TRAIL; i++) {
      const base = i * 4;
      if (i < _trailLen) {
        const p = trailGet(i);
        _trailTexData[base] = p.x / resW; // x normalized
        _trailTexData[base + 1] = p.y / resH; // y normalized
        _trailTexData[base + 2] = (now - p.time) / TRAIL_DURATION; // age
        _trailTexData[base + 3] = 0.0;
      } else {
        _trailTexData[base] = -1.0; // off-screen sentinel
        _trailTexData[base + 1] = -1.0;
        _trailTexData[base + 2] = 1.0;
        _trailTexData[base + 3] = 0.0;
      }
    }

    mat.uniforms.uTrailTex.value.needsUpdate = true;
    mat.uniforms.uTrailCount.value = _trailLen;

    const vel = computeVelocity();
    mat.uniforms.uVelocity.value.set(vel.x, vel.y);
  }

  // ─── Init ─────────────────────────────────────────────────────────────
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const wrapper = document.querySelector(".gradient-canvas");

  const DPR = Math.min(window.devicePixelRatio, 2);
  const physicalPixelSize = Math.round(config.pixelSize * DPR);

  // FIX: cache resolution object, không tạo mới mỗi frame
  const _res = {
    w: Math.round(window.innerWidth * DPR),
    h: Math.round(window.innerHeight * DPR),
  };
  function updateRes() {
    _res.w = Math.round(window.innerWidth * DPR);
    _res.h = Math.round(window.innerHeight * DPR);
  }

  renderer.setSize(_res.w, _res.h, false);
  renderer.setPixelRatio(1);
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  wrapper.appendChild(renderer.domElement);

  const fontAtlas = createFontAtlas(physicalPixelSize * 4);
  const gridTex = createGridTexture(PIXEL_GRID, GRID_W, GRID_H);
  _trailTex = createTrailTexture();

  function getGridCenter() {
    const logoWidthPx = GRID_W * physicalPixelSize;
    return new THREE.Vector2(
      config.marginLeft * DPR + logoWidthPx * 0.5,
      _res.h * config.centerY,
    );
  }

  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(_res.w, _res.h) },
      uColor1: { value: new THREE.Vector3(...hexToRgb(config.color1)) },
      uPixelSize: { value: physicalPixelSize },
      uPixelGap: { value: config.pixelGap },
      uFontAtlas: { value: fontAtlas },
      uMousePos: { value: new THREE.Vector2(-9999, -9999) },
      uMouseActive: { value: 0.0 },
      uVelocity: { value: new THREE.Vector2(0, 0) },
      // FIX: thay uniform array bằng texture
      uTrailTex: { value: _trailTex },
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
    actualMouse.y = (_res.h / DPR - (e.clientY - rect.top)) * DPR;
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

  // ─── Pause/Resume (dùng cho IntersectionObserver) ─────────────────────
  // FIX: chỉ pause RAF, không destroy context
  let _shaderPaused = false;
  let _shaderRafId = null;

  function shaderAnimate() {
    if (_shaderPaused) return;
    _shaderRafId = requestAnimationFrame(shaderAnimate);

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
    // FIX: dùng texture update thay vì updateTrailUniforms
    updateTrailTexture(material, _res.w, _res.h);
    renderer.render(scene, camera);
  }

  window.shaderPause = function () {
    _shaderPaused = true;
  };
  window.shaderResume = function () {
    if (!_shaderPaused) return;
    _shaderPaused = false;
    shaderAnimate();
  };

  // Bắt đầu loop
  shaderAnimate();

  // ─── Resize ───────────────────────────────────────────────────────────
  window.addEventListener("resize", () => {
    updateRes();
    renderer.setSize(_res.w, _res.h, false);
    material.uniforms.iResolution.value.set(_res.w, _res.h);
    material.uniforms.uGridCenter.value.copy(getGridCenter());
  });
})();

// ═══════════════════════════════════════════════════════════════════════════
//  IntersectionObserver — tắt/bật shader & globe theo viewport
// ═══════════════════════════════════════════════════════════════════════════
// FIX: rootMargin '150px' để warm-up trước khi user thấy section
(function initVisibilityControl() {
  const shaderSection = document.querySelector(".gradient-canvas");
  const globeSection = document.getElementById("company-globe");
  if (!shaderSection || !globeSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === shaderSection) {
          if (entry.isIntersecting) window.shaderResume?.();
          else window.shaderPause?.();
        }
        if (entry.target === globeSection) {
          if (entry.isIntersecting) window.globeResume?.();
          else window.globePause?.();
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "150px", // warm-up 150px trước khi visible
    },
  );

  observer.observe(shaderSection);
  observer.observe(globeSection);
})();

// ═══════════════════════════════════════════════════════════════════════════
//  3D Globe — fixed version
// ═══════════════════════════════════════════════════════════════════════════
(function init3DGlobeAnimation() {
  window.init3DGlobe = async function init3DGlobe() {
    const globeRoot = document.getElementById("company-globe");
    if (!globeRoot) return;

    const msgEl = document.getElementById("company-globe-msg");
    const msgText = document.getElementById("company-globe-msg-text");
    const prog = document.getElementById("company-globe-prog");

    const CITIES = [
      {
        name: "Vietnam",
        lat: 18.5,
        lon: 104.5,
        icon: "Vietnam",
        reverse: false,
      },
      { name: "Japan", lat: 35.68, lon: 139.69, icon: "Japan", reverse: false },
      { name: "Korea", lat: 37.57, lon: 126.98, icon: "Korea", reverse: true },
      {
        name: "Brazil",
        lat: -15.78,
        lon: -47.93,
        icon: "Brazil",
        reverse: false,
      },
      {
        name: "Australia",
        lat: -33.87,
        lon: 151.21,
        icon: "Australia",
        reverse: false,
      },
      { name: "USA", lat: 38.91, lon: -77.04, icon: "USA", reverse: false },
    ];

    const ICONS = {
      Vietnam: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6067 4.42063C27.7736 1.56994 24.0067 0 20.0001 0C15.9935 0 12.2267 1.56987 9.39339 4.42063C6.56029 7.27126 5 11.0613 5 15.0926C5 19.124 6.56029 22.9142 9.39339 25.7649L19.259 35.6911C19.4637 35.8971 19.7319 36 20.0001 36C20.2684 36 20.5367 35.897 20.7413 35.6911L30.6065 25.7649C33.4397 22.9142 34.9999 19.1241 35 15.0927C34.9999 11.0612 33.4398 7.27118 30.6067 4.42063ZM24.7109 19.8324C23.4527 21.0985 21.7797 21.7958 20.0002 21.7958C18.2207 21.7958 16.5478 21.0985 15.2896 19.8325C14.0312 18.5664 13.3383 16.8832 13.3383 15.0926C13.3383 13.3022 14.0312 11.6189 15.2896 10.3528C16.5478 9.08673 18.2207 8.38951 20.0002 8.38951C21.7797 8.38951 23.4527 9.08673 24.7109 10.3528C25.9692 11.6188 26.6622 13.3021 26.6622 15.0926C26.6621 16.8831 25.9691 18.5664 24.7109 19.8324Z" fill="white"/><g clip-path="url(#cv)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3C26.6267 3 32 8.37333 32 15C32 21.6267 26.6267 27 20 27C13.3733 27 8 21.6267 8 15C8 8.37333 13.3733 3 20 3Z" fill="#DA251D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 13.553L17.708 16.3972L16.292 20.9992L20 18.1558L23.708 21L22.2905 16.398L26 13.553H21.401L20 9L18.599 13.553H14Z" fill="#FFFF00"/></g><defs><clipPath id="cv"><rect width="24" height="24" fill="white" transform="translate(8 3)"/></clipPath></defs></svg>`,
      Japan: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6067 4.42063C27.7736 1.56994 24.0067 0 20.0001 0C15.9935 0 12.2267 1.56987 9.39339 4.42063C6.56029 7.27126 5 11.0613 5 15.0926C5 19.124 6.56029 22.9142 9.39339 25.7649L19.259 35.6911C19.4637 35.8971 19.7319 36 20.0001 36C20.2684 36 20.5367 35.897 20.7413 35.6911L30.6065 25.7649C33.4397 22.9142 34.9999 19.1241 35 15.0927C34.9999 11.0612 33.4398 7.27118 30.6067 4.42063ZM24.7109 19.8324C23.4527 21.0985 21.7797 21.7958 20.0002 21.7958C18.2207 21.7958 16.5478 21.0985 15.2896 19.8325C14.0312 18.5664 13.3383 16.8832 13.3383 15.0926C13.3383 13.3022 14.0312 11.6189 15.2896 10.3528C16.5478 9.08673 18.2207 8.38951 20.0002 8.38951C21.7797 8.38951 23.4527 9.08673 24.7109 10.3528C25.9692 11.6188 26.6622 13.3021 26.6622 15.0926C26.6621 16.8831 25.9691 18.5664 24.7109 19.8324Z" fill="white"/><g clip-path="url(#cj)"><path d="M20 27C26.6274 27 32 21.6274 32 15C32 8.37258 26.6274 3 20 3C13.3726 3 8 8.37258 8 15C8 21.6274 13.3726 27 20 27Z" fill="#F0F0F0"/><path d="M20 21C23.3137 21 26 18.3137 26 15C26 11.6863 23.3137 9 20 9C16.6863 9 14 11.6863 14 15C14 18.3137 16.6863 21 20 21Z" fill="#D80027"/></g><defs><clipPath id="cj"><rect width="24" height="24" fill="white" transform="translate(8 3)"/></clipPath></defs></svg>`,
      Korea: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6067 4.42063C27.7736 1.56994 24.0067 0 20.0001 0C15.9935 0 12.2267 1.56987 9.39339 4.42063C6.56029 7.27126 5 11.0613 5 15.0926C5 19.124 6.56029 22.9142 9.39339 25.7649L19.259 35.6911C19.4637 35.8971 19.7319 36 20.0001 36C20.2684 36 20.5367 35.897 20.7413 35.6911L30.6065 25.7649C33.4397 22.9142 34.9999 19.1241 35 15.0927C34.9999 11.0612 33.4398 7.27118 30.6067 4.42063ZM24.7109 19.8324C23.4527 21.0985 21.7797 21.7958 20.0002 21.7958C18.2207 21.7958 16.5478 21.0985 15.2896 19.8325C14.0312 18.5664 13.3383 16.8832 13.3383 15.0926C13.3383 13.3022 14.0312 11.6189 15.2896 10.3528C16.5478 9.08673 18.2207 8.38951 20.0002 8.38951C21.7797 8.38951 23.4527 9.08673 24.7109 10.3528C25.9692 11.6188 26.6622 13.3021 26.6622 15.0926C26.6621 16.8831 25.9691 18.5664 24.7109 19.8324Z" fill="white"/><g clip-path="url(#clip0_1012_27773)"><path d="M20 27C26.6274 27 32 21.6274 32 15C32 8.37258 26.6274 3 20 3C13.3726 3 8 8.37258 8 15C8 21.6274 13.3726 27 20 27Z" fill="#F0F0F0"/><path d="M24.174 15.0001C24.174 16.0435 22.3052 18.6522 20.0001 18.6522C17.6949 18.6522 15.8262 16.0435 15.8262 15.0001C15.8262 12.6948 17.6949 10.8262 20.0001 10.8262C22.3052 10.8262 24.174 12.6948 24.174 15.0001Z" fill="#D80027"/><path d="M24.174 15C24.174 17.3052 22.3052 19.1739 20.0001 19.1739C17.6949 19.1739 15.8262 17.3052 15.8262 15" fill="#0052B4"/><path d="M24.4238 18.6895L25.5304 17.5829L26.2682 18.3206L25.1616 19.4272L24.4238 18.6895Z" fill="black"/><path d="M22.5781 20.5339L23.6847 19.4273L24.4225 20.1651L23.3159 21.2717L22.5781 20.5339Z" fill="black"/><path d="M26.6367 20.9026L27.7433 19.796L28.4811 20.5337L27.3745 21.6403L26.6367 20.9026Z" fill="black"/><path d="M24.793 22.7473L25.8996 21.6407L26.6373 22.3785L25.5307 23.4851L24.793 22.7473Z" fill="black"/><path d="M25.5312 19.7961L26.6378 18.6895L27.3756 19.4273L26.269 20.5339L25.5312 19.7961Z" fill="black"/><path d="M23.6855 21.6404L24.7921 20.5338L25.5299 21.2715L24.4233 22.3781L23.6855 21.6404Z" fill="black"/><path d="M26.6426 11.3125L23.6916 8.36156L24.4294 7.62382L27.3803 10.5748L26.6426 11.3125Z" fill="black"/><path d="M23.6914 10.5752L22.5848 9.4686L23.3225 8.73089L24.4291 9.83748L23.6914 10.5752Z" fill="black"/><path d="M25.5352 12.4199L24.4286 11.3133L25.1663 10.5756L26.2729 11.6822L25.5352 12.4199Z" fill="black"/><path d="M25.9043 8.36157L24.7977 7.25497L25.5354 6.51723L26.642 7.62383L25.9043 8.36157Z" fill="black"/><path d="M27.748 10.2065L26.6414 9.09994L27.3792 8.3622L28.4858 9.4688L27.748 10.2065Z" fill="black"/><path d="M12.2539 19.7939L15.2048 22.7449L14.4671 23.4826L11.5162 20.5317L12.2539 19.7939Z" fill="black"/><path d="M15.2051 20.5312L16.3117 21.6378L15.574 22.3756L14.4674 21.269L15.2051 20.5312Z" fill="black"/><path d="M13.3613 18.6873L14.4679 19.7939L13.7302 20.5316L12.6236 19.425L13.3613 18.6873Z" fill="black"/><path d="M14.4668 17.5803L17.4177 20.5313L16.68 21.269L13.7291 18.3181L14.4668 17.5803Z" fill="black"/><path d="M15.2051 7.25269L12.2541 10.2036L11.5164 9.46588L14.4673 6.51494L15.2051 7.25269Z" fill="black"/><path d="M16.3105 8.35913L13.3596 11.3101L12.6219 10.5723L15.5728 7.62139L16.3105 8.35913Z" fill="black"/><path d="M17.4199 9.46631L14.469 12.4172L13.7313 11.6795L16.6822 8.7286L17.4199 9.46631Z" fill="black"/></g><defs><clipPath id="clip0_1012_27773"><rect width="24" height="24" fill="white" transform="translate(8 3)"/></clipPath></defs></svg>`,
      Brazil: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6067 4.42063C27.7736 1.56994 24.0067 0 20.0001 0C15.9935 0 12.2267 1.56987 9.39339 4.42063C6.56029 7.27126 5 11.0613 5 15.0926C5 19.124 6.56029 22.9142 9.39339 25.7649L19.259 35.6911C19.4637 35.8971 19.7319 36 20.0001 36C20.2684 36 20.5367 35.897 20.7413 35.6911L30.6065 25.7649C33.4397 22.9142 34.9999 19.1241 35 15.0927C34.9999 11.0612 33.4398 7.27118 30.6067 4.42063ZM24.7109 19.8324C23.4527 21.0985 21.7797 21.7958 20.0002 21.7958C18.2207 21.7958 16.5478 21.0985 15.2896 19.8325C14.0312 18.5664 13.3383 16.8832 13.3383 15.0926C13.3383 13.3022 14.0312 11.6189 15.2896 10.3528C16.5478 9.08673 18.2207 8.38951 20.0002 8.38951C21.7797 8.38951 23.4527 9.08673 24.7109 10.3528C25.9692 11.6188 26.6622 13.3021 26.6622 15.0926C26.6621 16.8831 25.9691 18.5664 24.7109 19.8324Z" fill="white"/><g clip-path="url(#clip0_1012_27780)"><path d="M20 27C26.6274 27 32 21.6274 32 15C32 8.37258 26.6274 3 20 3C13.3726 3 8 8.37258 8 15C8 21.6274 13.3726 27 20 27Z" fill="#009B3A"/><path d="M10 15.0001L20 21.4001L30 15.0001L20 8.6001L10 15.0001Z" fill="#FEDF00"/><path d="M19.9998 19.24C22.3415 19.24 24.2398 17.3417 24.2398 15C24.2398 12.6583 22.3415 10.76 19.9998 10.76C17.6581 10.76 15.7598 12.6583 15.7598 15C15.7598 17.3417 17.6581 19.24 19.9998 19.24Z" fill="#002776"/><path d="M16.1599 13.3201C16.0799 13.5601 15.9999 13.7201 15.9199 13.9601C18.8799 13.4801 21.8399 14.2801 24.0799 16.2801C24.1599 16.0401 24.1599 15.8001 24.2399 15.6401C21.9199 13.7201 19.0399 12.9201 16.1599 13.3201Z" fill="white"/></g><defs><clipPath id="clip0_1012_27780"><rect width="24" height="24" fill="white" transform="translate(8 3)"/></clipPath></defs></svg>`,
      Australia: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6067 4.42063C27.7736 1.56994 24.0067 0 20.0001 0C15.9935 0 12.2267 1.56987 9.39339 4.42063C6.56029 7.27126 5 11.0613 5 15.0926C5 19.124 6.56029 22.9142 9.39339 25.7649L19.259 35.6911C19.4637 35.8971 19.7319 36 20.0001 36C20.2684 36 20.5367 35.897 20.7413 35.6911L30.6065 25.7649C33.4397 22.9142 34.9999 19.1241 35 15.0927C34.9999 11.0612 33.4398 7.27118 30.6067 4.42063ZM24.7109 19.8324C23.4527 21.0985 21.7797 21.7958 20.0002 21.7958C18.2207 21.7958 16.5478 21.0985 15.2896 19.8325C14.0312 18.5664 13.3383 16.8832 13.3383 15.0926C13.3383 13.3022 14.0312 11.6189 15.2896 10.3528C16.5478 9.08673 18.2207 8.38951 20.0002 8.38951C21.7797 8.38951 23.4527 9.08673 24.7109 10.3528C25.9692 11.6188 26.6622 13.3021 26.6622 15.0926C26.6621 16.8831 25.9691 18.5664 24.7109 19.8324Z" fill="white"/><g clip-path="url(#clip0_1012_27787)"><path d="M20 3C26.6275 3 31.9999 8.37207 32 15C32 21.6273 26.6277 27 20 27L19.6904 26.9961C13.2062 26.832 8.00001 21.5238 8 15C8 8.3724 13.3727 3 20 3Z" fill="#273375"/><path d="M16.2296 21.3952L17.0388 20.3864L15.7887 20.6128L15.355 19.4019L14.8835 20.6128L13.6072 20.3864L14.4184 21.373L13.5762 22.3585L14.8598 22.1568L15.2928 23.3428L15.7644 22.1574L17.0736 22.3914L16.2296 21.3952Z" fill="#F3F4F5"/><path d="M25.7943 22.2862L26.2532 21.7145L25.5446 21.8428L25.2988 21.1567L25.0317 21.8428L24.3084 21.7145L24.7681 22.2733L24.291 22.8321L25.0182 22.7177L25.2636 23.3893L25.5307 22.718L26.2727 22.8507L25.7943 22.2862Z" fill="#F3F4F5"/><path d="M25.7943 9.65463L26.2532 9.08279L25.5446 9.21123L25.2988 8.52515L25.0317 9.21123L24.3084 9.08279L24.7681 9.64191L24.291 10.2003L25.0182 10.0861L25.2636 10.7581L25.5307 10.0864L26.2727 10.2189L25.7943 9.65463Z" fill="#F3F4F5"/><path d="M28.7634 12.9222L29.222 12.3503L28.5137 12.4788L28.2679 11.7927L28.0008 12.4788L27.2772 12.3503L27.7369 12.9095L27.2598 13.468L27.987 13.3536L28.2323 14.0257L28.4995 13.354L29.2415 13.4864L28.7634 12.9222Z" fill="#F3F4F5"/><path d="M23.2258 14.3751L23.6847 13.8034L22.9761 13.9319L22.7303 13.2458L22.4632 13.9319L21.7401 13.8034L22.1996 14.3622L21.7227 14.921L22.4499 14.8067L22.6953 15.4782L22.9624 14.8071L23.7044 14.9396L23.2258 14.3751Z" fill="#F3F4F5"/><path d="M10.5205 7.64697C10.3322 7.88967 10.1524 8.13885 9.98242 8.39558H11.2688L10.5205 7.64697Z" fill="#29337A"/><path d="M16.7168 15H17.8728L16.7168 13.844V15Z" fill="#29337A"/><path d="M12.885 5.33765C12.6097 5.54077 12.3446 5.75621 12.0879 5.98148L12.885 6.77822V5.33765Z" fill="#29337A"/><path d="M11.7285 15.0001H12.8848V13.8438L11.7285 15.0001Z" fill="#29337A"/><path d="M19.9996 3C18.8609 3 17.7608 3.16198 16.7168 3.45854V6.77812L20 3.49507V3H19.9996Z" fill="#29337A"/><path d="M20 13.8936V12.2275H18.334L20 13.8936Z" fill="#29337A"/><path d="M8.49512 14.9999L11.268 12.2275H8.32569C8.11481 13.1179 8 14.0453 8 14.9999H8.49512Z" fill="#29337A"/><path d="M18.334 8.39557H20.0011V6.72876L18.334 8.39557Z" fill="#29337A"/><path d="M20.0013 14.2435V13.8936L18.3353 12.2275H20.0013V11.6309H17.3887L20.0013 14.2435Z" fill="white"/><path d="M11.2694 8.39534H9.98303C9.85459 8.58996 9.73253 8.78908 9.61523 8.99145H12.1423L10.6424 7.49194C10.6013 7.54312 10.5609 7.59485 10.5209 7.64653L11.2694 8.39534Z" fill="white"/><path d="M12.8859 13.8436V14.9999H13.4822V12.9707L11.4531 14.9999H11.7296L12.8859 13.8436Z" fill="white"/><path d="M16.7172 3.45825C16.5161 3.5153 16.3176 3.57742 16.1211 3.6443V7.65093L20.0004 3.77183V3.49539L16.7172 6.77783V3.45825Z" fill="white"/><path d="M12.8647 12.2276L12.8857 12.2065L13.4611 11.6311H8.48344C8.42604 11.8279 8.37355 12.0267 8.32617 12.2276H11.2685L8.4956 14.9999H10.0921L12.8647 12.2276Z" fill="white"/><path d="M20 8.99181V8.3955H18.3329L20 6.72869V5.13257L16.1406 8.99181H20Z" fill="white"/><path d="M12.8848 6.7783L12.0877 5.98155C11.805 6.22997 11.5336 6.49142 11.2754 6.76543L12.8848 8.37483L12.9019 8.39226L13.4811 8.97149V4.92676C13.2784 5.05844 13.0788 5.19428 12.885 5.33752V6.7783H12.8848Z" fill="white"/><path d="M16.7174 13.8439L17.8734 14.9999H19.3964L16.1211 11.7249V14.9999H16.7174V13.8439Z" fill="white"/><path d="M17.9831 12.2275L17.387 11.6311H19.9996V8.99172H16.1402L16.1203 9.01199V8.99172H16.1402L19.9996 5.13268V3.77186L16.1201 7.65116V3.64453C15.1824 3.96495 14.2976 4.3973 13.4808 4.92687V8.9714L13.5014 8.99167H13.4808V8.9714L12.9015 8.39222L12.9049 8.39562H12.8847V8.37494L11.2753 6.76554C11.0544 6.99937 10.8427 7.24151 10.6409 7.49237L12.1408 8.99187H9.61378C9.13629 9.81496 8.75451 10.6994 8.48242 11.6312H13.4601L13.4808 11.6102V11.6312H13.4601L12.8847 12.2067V12.2277H12.8636L10.0911 15H11.4519L13.481 12.9707V15H16.1203V11.7249L19.3954 15H19.8458C19.8971 14.9464 19.9495 14.8931 19.9998 14.838V14.2436L17.9831 12.2275Z" fill="#D32030"/><path d="M16.1211 7.65127L20.0006 3.77197L16.1211 7.65127Z" fill="#D32030"/><path d="M12.8843 12.2275V12.2063L12.8633 12.2275H12.8843Z" fill="#D32030"/><path d="M13.4818 11.6099L13.4609 11.6309H13.4818V11.6099Z" fill="#D32030"/><path d="M16.1211 9.01197L16.1412 8.9917H16.1211V9.01197Z" fill="#D32030"/><path d="M12.8848 8.39538H12.9052L12.9018 8.39219L12.8848 8.37476V8.39538Z" fill="#D32030"/><path d="M13.5011 8.99166L13.4805 8.97119V8.99166H13.5011Z" fill="#D32030"/></g><defs><clipPath id="clip0_1012_27787"><rect width="24" height="24" fill="white" transform="translate(8 3)"/></clipPath></defs></svg>`,
      USA: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6067 4.42063C27.7736 1.56994 24.0067 0 20.0001 0C15.9935 0 12.2267 1.56987 9.39339 4.42063C6.56029 7.27126 5 11.0613 5 15.0926C5 19.124 6.56029 22.9142 9.39339 25.7649L19.259 35.6911C19.4637 35.8971 19.7319 36 20.0001 36C20.2684 36 20.5367 35.897 20.7413 35.6911L30.6065 25.7649C33.4397 22.9142 34.9999 19.1241 35 15.0927C34.9999 11.0612 33.4398 7.27118 30.6067 4.42063ZM24.7109 19.8324C23.4527 21.0985 21.7797 21.7958 20.0002 21.7958C18.2207 21.7958 16.5478 21.0985 15.2896 19.8325C14.0312 18.5664 13.3383 16.8832 13.3383 15.0926C13.3383 13.3022 14.0312 11.6189 15.2896 10.3528C16.5478 9.08673 18.2207 8.38951 20.0002 8.38951C21.7797 8.38951 23.4527 9.08673 24.7109 10.3528C25.9692 11.6188 26.6622 13.3021 26.6622 15.0926C26.6621 16.8831 25.9691 18.5664 24.7109 19.8324Z" fill="white"/><g clip-path="url(#clip0_1150_34950)"><path d="M19.9998 26.9995C26.6268 26.9995 31.9995 21.6264 31.9995 14.9998C31.9995 8.37318 26.6273 3 19.9998 3C13.3722 3 8 8.37364 8 14.9998C8 21.6259 13.3727 26.9995 19.9998 26.9995Z" fill="#F0F0F0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.2269 8.73412H19.4609V5.60059H27.4604C28.5589 6.47512 29.4953 7.53574 30.2269 8.73412ZM32.0002 14.9998H19.4674V11.8672H31.5872C31.8622 12.8886 32.001 13.942 32.0002 14.9998ZM20.0004 26.9995C22.7133 27.0058 25.3472 26.0864 27.467 24.3933H12.5343C14.6537 26.0867 17.2876 27.0061 20.0004 26.9995ZM30.24 21.2668H9.76075C9.16344 20.2927 8.70987 19.2375 8.41406 18.1338H31.5867C31.291 19.2375 30.8374 20.2928 30.24 21.2668Z" fill="#D80027"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.571 4.86747H13.5602V4.87497L13.571 4.86747ZM13.571 4.86747H14.6561L13.6338 5.60105L14.0205 6.80103L13.0005 6.06745L11.9871 6.80103L12.3204 5.76558C11.4247 6.51526 10.6432 7.39167 10.0006 8.36709H10.354L9.70715 8.83583L9.41372 9.35145L9.72028 10.3049L9.14045 9.883L8.74061 10.8139L9.07389 11.8592H10.3395L9.33357 12.6003L9.72028 13.8003L8.7003 13.0667L8.10031 13.5064C8.03336 14.0014 7.99984 14.5003 8 14.9998H19.9998V3.00001C17.7226 2.99705 15.4921 3.64498 13.571 4.86747ZM14.0182 13.7942L14.0271 13.8012H14.0205L14.0182 13.7942ZM13.6333 12.6008L14.0182 13.7942L13.0001 13.0676L11.9801 13.8012L12.3668 12.6012L11.3468 11.8676H12.6124L12.9991 10.6677L13.3858 11.8676H14.6514L13.6333 12.6008ZM13.6404 9.1077L14.0271 10.3077L13.0071 9.5741L11.9871 10.3077L12.3738 9.1077L11.3538 8.37412H12.6194L13.0062 7.17415L13.3929 8.37412H14.6585L13.6404 9.1077ZM17.3134 13.0676L18.3334 13.8012L17.9467 12.6012L18.9685 11.8676H17.7029L17.3162 10.6677L16.9295 11.8676H15.6639L16.6839 12.6012L16.2972 13.8012L17.3134 13.0676ZM17.9467 9.1077L18.3334 10.3077L17.3134 9.5741L16.2934 10.3077L16.6801 9.1077L15.6602 8.37412H16.9258L17.3125 7.17415L17.6992 8.37412H18.9648L17.9467 9.1077ZM18.3334 6.81415L17.9467 5.61418L18.9685 4.8806H17.7029L17.3162 3.68062L16.9295 4.8806H15.6639L16.6839 5.61418L16.2972 6.81415L17.3172 6.08057L18.3334 6.81415Z" fill="#0052B4"/></g><defs><clipPath id="clip0_1150_34950"><rect width="24" height="24" fill="white" transform="translate(8 3)"/></clipPath></defs></svg>`,
    };

    msgText.textContent = "Đang tải dữ liệu bản đồ...";
    prog.style.width = "10%";

    const worker = new Worker("assets/js/globe-worker.js");

    const landCells = await new Promise((resolve, reject) => {
      worker.onmessage = ({ data }) => {
        if (data.type === "progress") {
          prog.style.width = data.pct + "%";
          msgText.textContent = data.text;
        } else if (data.type === "done") {
          worker.terminate();
          resolve(new Int16Array(data.buffer));
        } else if (data.type === "error") {
          worker.terminate();
          reject(new Error(data.message));
        }
      };
      worker.onerror = (err) => {
        worker.terminate();
        reject(err);
      };
      worker.postMessage({ type: "start" });
    });

    prog.style.width = "90%";
    msgText.textContent = "Đang dựng cầu...";

    const COLS = 160,
      ROWS = 80,
      CELL = 10,
      GAP = 0.2;
    const offscreen = document.createElement("canvas");
    offscreen.width = COLS * CELL;
    offscreen.height = ROWS * CELL;
    const ctx = offscreen.getContext("2d");
    ctx.clearRect(0, 0, offscreen.width, offscreen.height);
    ctx.fillStyle = "hsla(247, 48%, 64%, 1)";
    const pad = (CELL * GAP) / 2;
    const sz = CELL * (1 - GAP);
    for (let i = 0; i < landCells.length; i += 2) {
      ctx.fillRect(
        landCells[i + 1] * CELL + pad,
        landCells[i] * CELL + pad,
        sz,
        sz,
      );
    }

    prog.style.width = "100%";
    await new Promise((r) => setTimeout(r, 150));
    msgEl.style.display = "none";

    initGlobe(offscreen);

    function initGlobe(textureCanvas) {
      const canvas = document.getElementById("company-globe-canvas");
      const container = canvas.parentElement;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 3.8;

      function resize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        // FIX: re-cache marker widths khi resize
        markerEls.forEach((el, i) => {
          markerWidths[i] = el.offsetWidth || 60;
        });
      }

      const RADIUS = 1.0;
      const texture = new THREE.CanvasTexture(textureCanvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      const sphereGeo = new THREE.SphereGeometry(RADIUS, 128, 64);
      const sphereMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.1,
        side: THREE.DoubleSide,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      const globe = new THREE.Group();
      globe.rotation.x = -0.15;
      globe.add(sphereMesh);
      scene.add(globe);

      function latLonToVec3(lat, lon, r) {
        const phi = ((90 - lat) * Math.PI) / 180;
        const theta = ((lon + 180) * Math.PI) / 180;
        return new THREE.Vector3(
          -Math.sin(phi) * Math.cos(theta) * r,
          Math.cos(phi) * r,
          Math.sin(phi) * Math.sin(theta) * r,
        );
      }

      const labelsContainer = document.getElementById("company-globe-labels");
      let hoveredIdx = -1;

      const markerData = CITIES.map((c) => ({
        ...c,
        localPos: latLonToVec3(c.lat, c.lon, 1.01),
      }));

      const markerEls = markerData.map((m, i) => {
        const div = document.createElement("div");
        div.className = "company-globe-marker" + (m.reverse ? " reverse" : "");
        div.innerHTML =
          '<div class="company-globe-marker-icon">' +
          (ICONS[m.icon] || "") +
          "</div>" +
          '<span class="company-globe-marker-name">' +
          m.name +
          "</span>";
        div.addEventListener("mouseenter", () => {
          if (isDragging) return;
          hoveredIdx = i;
          refreshHover();
          isPaused = true;
        });
        div.addEventListener("mouseleave", () => {
          hoveredIdx = -1;
          refreshHover();
          isPaused = false;
        });
        labelsContainer.appendChild(div);
        return div;
      });

      // FIX: cache offsetWidth sau khi mount, không đọc trong RAF loop
      const markerWidths = markerEls.map((el) => el.offsetWidth || 60);

      function refreshHover() {
        markerEls.forEach((el, i) =>
          el.classList.toggle("is-hovered", i === hoveredIdx),
        );
      }

      // FIX: reuse Vector3 thay vì allocate mỗi frame
      const _wp = new THREE.Vector3();
      const _pr = new THREE.Vector3();

      function updateMarkers() {
        const W = renderer.domElement.clientWidth;
        const H = renderer.domElement.clientHeight;
        markerData.forEach((m, i) => {
          _wp.copy(m.localPos).applyMatrix4(globe.matrixWorld);
          const dot = _wp.dot(camera.position);
          const edgeFade = THREE.MathUtils.clamp(dot / 0.3, 0, 1);
          _pr.copy(_wp).project(camera);
          const sx = (_pr.x * 0.5 + 0.5) * W;
          const sy = (-_pr.y * 0.5 + 0.5) * H;
          const el = markerEls[i];
          // FIX: dùng cached width, không đọc offsetWidth trong loop
          const elW = markerWidths[i];
          const offsetX = m.reverse ? sx - elW + 20 : sx - 20;
          el.style.transform = `translate(${offsetX}px,${sy - 46}px)`;

          el.style.zIndex = Math.round((1.0 - _pr.z) * 500);

          let opacity;
          if (edgeFade < 0.01) opacity = 0;
          else if (hoveredIdx !== -1 && hoveredIdx !== i)
            opacity = edgeFade * 0.15;
          else opacity = edgeFade;
          el.style.opacity = opacity;
          el.style.pointerEvents =
            edgeFade > 0.3 && !isDragging ? "auto" : "none";
        });
      }

      let isDragging = false;
      let isPaused = false;
      let pauseScale = 1.0;
      let velX = 0;
      let velY = 0;
      let autoRotate = true;

      // FIX: circular trail buffer cho globe drag (giống shader trail)
      const _globeTrail = new Float64Array(16 * 3); // 16 entries: x, y, t
      let _globeTrailHead = 0;
      let _globeTrailLen = 0;
      const GLOBE_TRAIL_MS = 80;

      function globeTrailPush(x, y) {
        const now = performance.now();
        _globeTrail[_globeTrailHead * 3] = x;
        _globeTrail[_globeTrailHead * 3 + 1] = y;
        _globeTrail[_globeTrailHead * 3 + 2] = now;
        _globeTrailHead = (_globeTrailHead + 1) % 16;
        if (_globeTrailLen < 16) _globeTrailLen++;
        // expire
        while (_globeTrailLen > 1) {
          const oldestSlot =
            ((_globeTrailHead - _globeTrailLen + 16 * 2) % 16) * 3;
          if (now - _globeTrail[oldestSlot + 2] > GLOBE_TRAIL_MS)
            _globeTrailLen--;
          else break;
        }
      }

      function globeTrailVelocity() {
        if (_globeTrailLen < 2) return { vx: 0, vy: 0 };
        const newest = ((_globeTrailHead - 1 + 16) % 16) * 3;
        const oldest = ((_globeTrailHead - _globeTrailLen + 16 * 2) % 16) * 3;
        const dt = _globeTrail[newest + 2] - _globeTrail[oldest + 2] || 1;
        return {
          vx: ((_globeTrail[newest] - _globeTrail[oldest]) / dt) * 16 * 0.005,
          vy:
            ((_globeTrail[newest + 1] - _globeTrail[oldest + 1]) / dt) *
            16 *
            0.005,
        };
      }

      // FIX: lưu reference handler để có thể removeEventListener khi destroy
      const _onMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        const v = globeTrailVelocity();
        velX = v.vx;
        velY = v.vy;
      };
      const _onMouseMove = (e) => {
        if (!isDragging) return;
        const newest = ((_globeTrailHead - 1 + 16) % 16) * 3;
        const prevX = _globeTrailLen > 0 ? _globeTrail[newest] : e.clientX;
        const prevY = _globeTrailLen > 0 ? _globeTrail[newest + 1] : e.clientY;
        globe.rotation.y += (e.clientX - prevX) * 0.005;
        globe.rotation.x = clamp(
          globe.rotation.x + (e.clientY - prevY) * 0.005,
          -1.2,
          1.2,
        );
        globeTrailPush(e.clientX, e.clientY);
      };

      canvas.addEventListener("mousedown", (e) => {
        isDragging = true;
        autoRotate = false;
        _globeTrailLen = 0;
        _globeTrailHead = 0;
        globeTrailPush(e.clientX, e.clientY);
        velX = 0;
        velY = 0;
        hoveredIdx = -1;
        refreshHover();
      });
      window.addEventListener("mouseup", _onMouseUp);
      window.addEventListener("mousemove", _onMouseMove);

      canvas.addEventListener(
        "touchstart",
        (e) => {
          isDragging = true;
          autoRotate = false;
          _globeTrailLen = 0;
          _globeTrailHead = 0;
          globeTrailPush(e.touches[0].clientX, e.touches[0].clientY);
          velX = 0;
          velY = 0;
        },
        { passive: true },
      );
      canvas.addEventListener("touchend", () => {
        if (!isDragging) return;
        isDragging = false;
        const v = globeTrailVelocity();
        velX = v.vx;
        velY = v.vy;
      });
      canvas.addEventListener(
        "touchmove",
        (e) => {
          if (!isDragging) return;
          const newest = ((_globeTrailHead - 1 + 16) % 16) * 3;
          const prevX =
            _globeTrailLen > 0 ? _globeTrail[newest] : e.touches[0].clientX;
          const prevY =
            _globeTrailLen > 0 ? _globeTrail[newest + 1] : e.touches[0].clientY;
          globe.rotation.y += (e.touches[0].clientX - prevX) * 0.005;
          globe.rotation.x = clamp(
            globe.rotation.x + (e.touches[0].clientY - prevY) * 0.005,
            -1.2,
            1.2,
          );
          globeTrailPush(e.touches[0].clientX, e.touches[0].clientY);
        },
        { passive: true },
      );

      let _globePaused = false;

      function globeLoop() {
        if (_globePaused) return;
        requestAnimationFrame(globeLoop);
        pauseScale += ((isPaused ? 0 : 1) - pauseScale) * 0.05;
        if (autoRotate) {
          globe.rotation.y += 0.002 * pauseScale;
        } else if (!isDragging) {
          velX *= 0.92;
          velY *= 0.92;
          globe.rotation.y += velX * pauseScale;
          globe.rotation.x = clamp(
            globe.rotation.x + velY * pauseScale,
            -1.2,
            1.2,
          );
          if (Math.abs(velX) < 0.0001 && Math.abs(velY) < 0.0001)
            autoRotate = true;
        }
        globe.updateMatrixWorld(true);
        updateMarkers();
        renderer.render(scene, camera);
      }

      window.globePause = function () {
        _globePaused = true;
      };
      window.globeResume = function () {
        if (!_globePaused) return;
        _globePaused = false;
        globeLoop();
      };

      // FIX: cleanup khi cần (SPA navigation)
      window.globeDestroy = function () {
        _globePaused = true;
        window.removeEventListener("mouseup", _onMouseUp);
        window.removeEventListener("mousemove", _onMouseMove);
        window.removeEventListener("resize", resize);
        renderer.dispose();
        texture.dispose();
        sphereGeo.dispose();
        sphereMat.dispose();
      };

      resize();
      window.addEventListener("resize", resize);
      globeLoop();
    }

    function clamp(v, lo, hi) {
      return Math.min(hi, Math.max(lo, v));
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.init3DGlobe);
  } else {
    window.init3DGlobe();
  }
})();
