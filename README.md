# SimMag — Simulador de Fuerzas Magnéticas

Aplicación web interactiva para estudiantes de segundo año de Física II. Visualiza en 3D los tres fenómenos fundamentales del electromagnetismo: movimiento circular en campo magnético, fuerza de Lorentz con campos simultáneos y el funcionamiento del espectrómetro de masas.

---

## Simulaciones

### Sim 1 — Partícula en Campo Magnético Uniforme
Una partícula cargada que se mueve perpendicularmente a un campo **B** uniforme describe una trayectoria circular. La simulación muestra los vectores de velocidad y fuerza centrípeta en tiempo real y calcula `F`, `r`, `T`, `f` y `ω`.

### Sim 2 — Fuerza de Lorentz con Campos E y B
Calcula y visualiza la fuerza total `F = q(E + v×B)` con campos eléctrico y magnético simultáneos. Los vectores se renderizan en espacio 3D proporcionales a su magnitud. Incluye un panel con los cinco pasos de cálculo intermedios.

### Sim 3 — Espectrómetro de Masas
Animación en dos fases: el selector de velocidades donde la partícula avanza en línea recta cuando `v = E/B`, y la cámara de deflexión donde describe un semicírculo de radio `r = mv/(qB₀)`. El punto de aterrizaje en la placa fotográfica se marca en tiempo real.

---

## Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 14.2.0 |
| UI | React | 18 |
| Lenguaje | TypeScript | 5 |
| Renderizado 3D | Three.js | 0.163.0 |
| Estilos | Tailwind CSS | 3.3 |

---

## Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/conradoDantiochia/simMag.git
cd magnetic-simulator

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

```bash
# Build de producción
npm run build
npm start
```

**Requiere:** Node.js 18+, navegador con soporte WebGL (Chrome recomendado).

---

## Estructura del proyecto

```
magnetic-simulator/
│
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
│
└── app/
    ├── layout.tsx              Layout raíz (HTML, fuentes, metadata)
    ├── page.tsx                Página principal y navegación entre sims
    ├── globals.css             Variables CSS y estilos del tema oscuro
    │
    ├── lib/
    │   ├── physics.ts          Núcleo físico y operaciones vectoriales
    │   └── three-utils.ts      Utilidades Three.js y OrbitControls
    │
    └── components/
        ├── ParamControl.tsx    Componentes UI reutilizables
        └── simulators/
            ├── CircularMotionSim.tsx     Sim 1
            ├── LorentzVectorSim.tsx      Sim 2
            └── MassSpectrometerSim.tsx   Sim 3
```

---
