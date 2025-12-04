import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function FloatingShape({ position, color, size = 1, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export function FloatingSphere({ position, color, size = 1, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.008 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
  );
}

export function FloatingTorus({ position, color, size = 1, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008 * speed;
      meshRef.current.rotation.y += 0.012 * speed;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[size, size * 0.4, 16, 100]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.6}
        roughness={0.4}
      />
    </mesh>
  );
}

