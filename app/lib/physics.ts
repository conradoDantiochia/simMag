// ────────────────────────────────────────────────
// Vector math utilities
// ────────────────────────────────────────────────

export interface Vec3 { x: number; y: number; z: number }

export const vec3 = (x = 0, y = 0, z = 0): Vec3 => ({ x, y, z })

export const cross = (a: Vec3, b: Vec3): Vec3 => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x,
})

export const dot = (a: Vec3, b: Vec3) => a.x * b.x + a.y * b.y + a.z * b.z

export const magnitude = (v: Vec3) => Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2)

export const scale = (v: Vec3, s: number): Vec3 => ({ x: v.x * s, y: v.y * s, z: v.z * s })

export const add = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z })

export const angleBetween = (a: Vec3, b: Vec3) => {
  const cosA = dot(a, b) / (magnitude(a) * magnitude(b))
  return Math.acos(Math.max(-1, Math.min(1, cosA))) * (180 / Math.PI)
}

export const formatVec = (v: Vec3, decimals = 2) =>
  `(${v.x.toFixed(decimals)}î + ${v.y.toFixed(decimals)}ĵ + ${v.z.toFixed(decimals)}k̂)`

export const vecMag = (v: Vec3) => magnitude(v)

// ────────────────────────────────────────────────
// Physics constants
// ────────────────────────────────────────────────

export const ELECTRON_CHARGE = 1.6e-19   // C
export const ELECTRON_MASS   = 9.11e-31  // kg
export const PROTON_MASS     = 1.67e-27  // kg
export const PROTON_CHARGE   = 1.6e-19   // C

// ────────────────────────────────────────────────
// Problem solvers
// ────────────────────────────────────────────────

/** Prob 1 & 3 & 5: Circular motion in magnetic field */
export const circularMotion = (q: number, m: number, v: number, B: number) => {
  const F = Math.abs(q) * v * B          // N  (v ⊥ B)
  const r = m * v / (Math.abs(q) * B)    // m
  const T = 2 * Math.PI * m / (Math.abs(q) * B) // s
  const f = 1 / T                         // Hz
  return { F, r, T, f }
}


/** Prob 7: Mass spectrometer */
export const massSpectrometer = (E: number, B: number, B0: number, m: number, q: number) => {
  const v = E / B       // velocity selector
  const r = m * v / (Math.abs(q) * B0)
  return { v, r }
}
