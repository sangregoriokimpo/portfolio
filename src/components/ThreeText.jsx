import { Canvas } from '@react-three/fiber';
import { Center, Text3D, OrbitControls } from '@react-three/drei';

export default function ThreeText() {
  return (
    <Canvas style={{ height: '300px' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <Center>
        <Text3D font="/fonts/helvetiker_regular.typeface.json" size={1} height={0.3}>
          SANGREGORIOKIMPO
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </Center>
    </Canvas>
  );
}
