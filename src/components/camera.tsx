import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh, Vector3 } from "three";

interface FollowCameraProps {
  followPlanetRef: React.RefObject<Mesh | null> | null;
  minDistance?: number;
  maxDistance?: number;
  startDistance?: number;
}

export default function FollowCamera({
  followPlanetRef,
  minDistance = 1,
  maxDistance = 50,
}: FollowCameraProps) {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();

  const [userRotated, setUserRotated] = useState(false);
  const [userZoomed, setUserZoomed] = useState(false);

  // Store default camera state
  const defaultState = useRef({
    position: camera.position.clone(),
    target: new Vector3(0, 0, 0),
  });

  const offset = useRef(camera.position.clone().sub(defaultState.current.target));
  const desiredOffset = useRef(offset.current.clone());

  // Initialize OrbitControls target
  useEffect(() => {
    if (!controlsRef.current) return;
    controlsRef.current.target.copy(defaultState.current.target);
    controlsRef.current.update();
  }, []);

  // Update desired offset when changing planets (only if user hasn't rotated/zoomed)
  useEffect(() => {
    const mesh = followPlanetRef?.current;
    const newTarget = mesh ? mesh.position : defaultState.current.target;

    if (!userRotated && !userZoomed) {
      desiredOffset.current.copy(camera.position.clone().sub(newTarget));
    }
  }, [followPlanetRef, camera, userRotated, userZoomed]);

  // Smooth follow and offset
  useFrame(() => {
    const mesh = followPlanetRef?.current;
    const targetPos = mesh ? mesh.position : defaultState.current.target;
    if (!controlsRef.current) return;

    controlsRef.current.target.lerp(targetPos, 0.1);

    if (!userRotated) {
      // Smoothly interpolate the offset if user hasn't rotated
      offset.current.lerp(desiredOffset.current, 0.05);
      camera.position.copy(controlsRef.current.target.clone().add(offset.current));
    } else {
      // Keep user rotation/zoom
      const dir = camera.position.clone().sub(targetPos);
      camera.position.copy(targetPos.clone().add(dir));
    }

    controlsRef.current.update();
  });

  // Track user rotation and zoom
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const onChange = () => {
      const mesh = followPlanetRef?.current;
      const target = mesh ? mesh.position : defaultState.current.target;
      offset.current.copy(camera.position.clone().sub(target));
      setUserRotated(true);
    };

    const onZoom = () => setUserZoomed(true);

    controls.addEventListener("change", onChange);
    controls.addEventListener("zoom", onZoom);
    return () => {
      controls.removeEventListener("change", onChange);
      controls.removeEventListener("zoom", onZoom);
    };
  }, [followPlanetRef]);

  // Reset to default on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const { position, target } = defaultState.current;
        desiredOffset.current.copy(position.clone().sub(target));
        setUserRotated(false);
        setUserZoomed(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={true}
      minDistance={minDistance}
      maxDistance={maxDistance}
      maxPolarAngle={Math.PI * 0.95}
    />
  );
}
