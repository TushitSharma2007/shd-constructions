// Two-point-perspective line drawing of a modern house, used as the
// architectural "sketch" artwork. Strokes use currentColor, so set colour
// and opacity on the wrapper via className.

type Pt = [number, number];

const HORIZON = 255;
const VP_LEFT = -520;
const VP_RIGHT = 1180;
const OVERSHOOT = 9; // sketchy construction-line overrun

// y of the line from (x0, y0) toward a vanishing point, evaluated at x
function toward(x0: number, y0: number, x: number, vpX: number) {
  return y0 + ((HORIZON - y0) * (x - x0)) / (vpX - x0);
}

function extend(a: Pt, b: Pt, by: number): [Pt, Pt] {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  const ux = (dx / len) * by;
  const uy = (dy / len) * by;
  return [
    [a[0] - ux, a[1] - uy],
    [b[0] + ux, b[1] + uy],
  ];
}

type Box = {
  x: number; // front corner x
  top: number;
  bottom: number;
  left: number; // far x of left face
  right: number; // far x of right face
  mullionsLeft?: number;
  mullionsRight?: number;
  floors?: number;
};

function boxLines(b: Box): [Pt, Pt][] {
  const lines: [Pt, Pt][] = [];
  const lt = toward(b.x, b.top, b.left, VP_LEFT);
  const lb = toward(b.x, b.bottom, b.left, VP_LEFT);
  const rt = toward(b.x, b.top, b.right, VP_RIGHT);
  const rb = toward(b.x, b.bottom, b.right, VP_RIGHT);

  lines.push([[b.x, b.top], [b.x, b.bottom]]);
  lines.push([[b.x, b.top], [b.left, lt]], [[b.x, b.bottom], [b.left, lb]], [[b.left, lt], [b.left, lb]]);
  lines.push([[b.x, b.top], [b.right, rt]], [[b.x, b.bottom], [b.right, rb]], [[b.right, rt], [b.right, rb]]);

  const faces: [number, number, number | undefined][] = [
    [b.left, VP_LEFT, b.mullionsLeft],
    [b.right, VP_RIGHT, b.mullionsRight],
  ];
  for (const [farX, vp, count] of faces) {
    if (count) {
      for (let i = 1; i < count; i++) {
        const x = b.x + ((farX - b.x) * i) / count;
        lines.push([[x, toward(b.x, b.top, x, vp)], [x, toward(b.x, b.bottom, x, vp)]]);
      }
    }
    for (let f = 1; f < (b.floors ?? 1); f++) {
      const y = b.top + ((b.bottom - b.top) * f) / (b.floors ?? 1);
      lines.push([[b.x, y], [farX, toward(b.x, y, farX, vp)]]);
    }
  }
  return lines;
}

// window opening on one face: spans fractions a..b of the face width,
// yTop..yBot measured at the front corner, with vertical mullions
function windowLines(
  x0: number,
  farX: number,
  vp: number,
  a: number,
  b: number,
  yTop: number,
  yBot: number,
  mullions: number
): [Pt, Pt][] {
  const xa = x0 + (farX - x0) * a;
  const xb = x0 + (farX - x0) * b;
  const at = (x: number, y: number): Pt => [x, toward(x0, y, x, vp)];
  const lines: [Pt, Pt][] = [
    [at(xa, yTop), at(xb, yTop)],
    [at(xa, yBot), at(xb, yBot)],
  ];
  for (let i = 0; i <= mullions + 1; i++) {
    const x = xa + ((xb - xa) * i) / (mullions + 1);
    lines.push([at(x, yTop), at(x, yBot)]);
  }
  return lines;
}

const FRONT = 330;
const GROUND = 325;

const SEGMENTS: [Pt, Pt][] = [
  // ground-floor volume, mostly glazed
  ...boxLines({ x: FRONT, top: 210, bottom: GROUND, left: 120, right: 470 }),
  ...windowLines(FRONT, 120, VP_LEFT, 0.08, 0.92, 222, 316, 5),
  ...windowLines(FRONT, 470, VP_RIGHT, 0.12, 0.6, 222, GROUND, 2),
  // upper volume cantilevering to the right
  ...boxLines({ x: FRONT, top: 85, bottom: 210, left: 200, right: 590 }),
  ...windowLines(FRONT, 590, VP_RIGHT, 0.08, 0.92, 115, 178, 6),
  ...windowLines(FRONT, 200, VP_LEFT, 0.2, 0.8, 115, 178, 2),
  // roof slab
  ...boxLines({ x: FRONT, top: 74, bottom: 85, left: 190, right: 602 }),
  // column under the cantilever
  [[560, toward(FRONT, 210, 560, VP_RIGHT)], [560, toward(FRONT, GROUND, 560, VP_RIGHT)]],
  // ground lines
  [[FRONT, GROUND], [30, toward(FRONT, GROUND, 30, VP_LEFT)]],
  [[FRONT, GROUND], [630, toward(FRONT, GROUND, 630, VP_RIGHT)]],
  [[FRONT, 342], [60, toward(FRONT, 342, 60, VP_LEFT)]],
  [[FRONT, 342], [610, toward(FRONT, 342, 610, VP_RIGHT)]],
  // tree trunk
  [[72, 318], [72, 236]],
  [[72, 262], [86, 246]],
  [[72, 274], [60, 260]],
];

export default function BuildingSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 390" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" vectorEffect="non-scaling-stroke">
        {SEGMENTS.map(([a, b], i) => {
          const [p, q] = extend(a, b, OVERSHOOT);
          return <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} />;
        })}
        {/* soft tree canopy */}
        <ellipse cx="72" cy="214" rx="28" ry="36" opacity="0.6" />
        <ellipse cx="66" cy="224" rx="18" ry="24" opacity="0.4" />
      </g>
    </svg>
  );
}
