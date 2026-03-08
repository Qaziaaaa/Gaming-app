import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroModel() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (!groupRef.current) return;
        // Simple, predictable continuous rotation that doesn't rely on complex MathUtils.lerp per frame
        groupRef.current.rotation.y += delta * 0.2;
    });

    return (
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
            <group ref={groupRef} scale={1.2}>

                {/* Central Protocol Core (Solid Octahedron) */}
                <mesh>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#111111"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#330000"
                        emissiveIntensity={0.5}
                    />
                </mesh>

                {/* Inner Data Ring (Wireframe Icosahedron) */}
                <mesh>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshBasicMaterial color="#ff0000" wireframe transparent opacity={0.3} />
                </mesh>

                {/* Mid Data Ring */}
                <mesh>
                    <octahedronGeometry args={[2, 0]} />
                    <meshBasicMaterial color="#ff3333" wireframe transparent opacity={0.15} />
                </mesh>

                {/* Core Energy Source */}
                <pointLight intensity={5} distance={10} color="#ff0000" />

                {/* Secondary accent lighting */}
                <pointLight position={[0, 4, 0]} intensity={2} distance={8} color="#ffffff" />
                <pointLight position={[0, -4, 0]} intensity={2} distance={8} color="#ffffff" />
            </group>
        </Float>
    );
}
