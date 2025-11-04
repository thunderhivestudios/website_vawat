import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Html } from "@react-three/drei";

import Planet from "./components/planet";
import FollowCamera from "./components/camera";
import { planetData } from "./data/planets";

export default function App() {
  const [followPlanetRef, setFollowPlanetRef] = useState<React.RefObject<any> | null>(null);
  const [cameraDistance, setCameraDistance] = useState(50); // default distance from Sun

  return (
    <Canvas
      camera={{ position: [0, 20, 50], fov: 60 }}
      className="w-screen h-screen block bg-black"
      shadows
    >
      {/* Ambient light for soft global illumination */}
      <ambientLight intensity={0.2} />

      {/* Point light at the Sun position */}
      <pointLight
        position={[0, 0, 0]}
        intensity={200}
        color="white"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Optional subtle directional light for depth */}
      <directionalLight
        position={[50, 50, 50]}
        intensity={0.1}
        color="#ffffff"
      />

      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} fade />

      {planetData.map((planet, idx) => (
        <Planet
          key={idx}
          {...planet} // Spread all PlanetProps fields automatically
          onClick={(planetRef) => {
            setFollowPlanetRef(planetRef);
            setCameraDistance(planet.focusDistance ?? 10);
          }}
        />
      ))}

      {/* Camera follows selected planet */}
      <FollowCamera
        followPlanetRef={followPlanetRef}
        startDistance={cameraDistance}
        minDistance={2}
        maxDistance={50}
      />
    </Canvas>
  );
}
