import { forwardRef, useRef, useMemo, useImperativeHandle } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import type { PlanetProps } from "../interfaces/planetProps";
import { TextureLoader, MathUtils, Mesh, Group, Texture } from "three";
import { Helpers } from "../utils/orbitHelpers";
import { Html } from "@react-three/drei";

const Planet = forwardRef<Mesh, PlanetProps>(
  (
    {
      name,
      offset = 0,
      positionOffset = { x: 0, z: 0 },
      texture,
      colour = "white",
      orbitSpeed = 0.01,
      spinSpeed = 0.02,
      scale = 1,
      orbitA = 10,
      orbitB = 10,
      orbitTilt = 0,
      axisTilt = 0,
      showOrbit = true,
      orbitColor = "#555",
      focusDistance,
      emissive = "black",
      emissiveIntensity = 0,
      onClick,
    },
    ref
  ) => {
    const planetRef = useRef<Mesh>(null);
    const groupRef = useRef<Group>(null);
    useImperativeHandle(ref, () => planetRef.current!);

    const colorMap: Texture | null = texture ? useLoader(TextureLoader, texture) : null;
    const speedFactor = 100;

    const orbit = useMemo(
      () => Helpers.createEllipseOrbit(orbitA, orbitB, 128, positionOffset),
      [orbitA, orbitB]
    );

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime() * orbitSpeed * speedFactor;

      if (planetRef.current) {
        const angle = t + MathUtils.degToRad(offset ?? 0);

        const x = Math.cos(angle) * orbitA + (positionOffset?.x ?? 0);
        const z = Math.sin(angle) * orbitB + (positionOffset?.z ?? 0);

        planetRef.current.position.set(x, 0, z);
        planetRef.current.rotation.y += spinSpeed;
      }
    });

    return (
      <group ref={groupRef} rotation={[MathUtils.degToRad(orbitTilt), 0, 0]}>
        {showOrbit && (
          <lineLoop
            geometry={orbit}
            onUpdate={(self) => (self.computeLineDistances(), null)}
          >
            <lineDashedMaterial
              color={orbitColor}
              dashSize={0.1}   // length of dash
              gapSize={0.2}    // length of gap between dashes
              scale={1}
            />
          </lineLoop>
        )}
        <mesh
          ref={planetRef}
          rotation={[MathUtils.degToRad(axisTilt), 0, 0]}
          scale={[scale, scale, scale]}
          onClick={() => onClick?.(planetRef, focusDistance)}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            map={colorMap ?? undefined}
            color={colour}
            emissive={emissive}
            emissiveIntensity={emissiveIntensity}
          />
          {name && (
            <Html position={[0, 0, 0]} center className="px-2 py-1 text-white text-sm ">
              {name}
            </Html>
          )}
        </mesh>
      </group>
    );
  }
);

export default Planet;
