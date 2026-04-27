importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js",
);

self.onmessage = async function (e) {
  if (e.data?.type !== "start") return;

  try {
    self.postMessage({
      type: "progress",
      pct: 10,
      text: "Đang tải dữ liệu bản đồ...",
    });

    const topoData = await fetch(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
    ).then((r) => r.json());

    self.postMessage({
      type: "progress",
      pct: 40,
      text: "Đang xử lý lục địa...",
    });

    const land = topojson.feature(topoData, topoData.objects.land);

    self.postMessage({
      type: "progress",
      pct: 60,
      text: "Đang vẽ lưới ô vuông...",
    });

    const COLS = 160;
    const ROWS = 80;

    const cells = [];
    for (let row = 0; row < ROWS; row++) {
      if (row % 10 === 0) {
        self.postMessage({
          type: "progress",
          pct: 60 + Math.round((row / ROWS) * 30),
          text: "Đang vẽ lưới ô vuông...",
        });
      }
      const lat = 90 - (row + 0.5) * (180 / ROWS);
      if (Math.abs(lat) > 83) continue;
      for (let col = 0; col < COLS; col++) {
        const lon = -180 + (col + 0.5) * (360 / COLS);
        if (d3.geoContains(land, [lon, lat])) {
          cells.push(row, col); // mỗi ô = 2 số
        }
      }
    }

    // Transfer ArrayBuffer để zero-copy
    const buf = new Int16Array(cells).buffer;
    self.postMessage({ type: "done", buffer: buf }, [buf]);
  } catch (err) {
    self.postMessage({ type: "error", message: err.message });
  }
};
