import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HeroModel from './HeroModel';

interface SceneProps {
  variant?: 'hero' | 'games' | 'features' | 'about';
}

export default function Scene({ variant = 'hero' }: SceneProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={1}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#ff0000" />

          {variant === 'hero' && (
            <HeroModel />
          )}

        </Suspense>
      </Canvas>
    </div>
  );
}

