import {
    Mesh,
} from "three";

export interface PlanetProps {
  name?: string;
  orbitSpeed?: number;
  spinSpeed?: number;
  scale?: number;
  orbitA?: number;
  orbitB?: number;
  orbitTilt?: number;
  axisTilt?: number;
  showOrbit?: boolean;
  orbitColor?: string;
  focusDistance?: number;
  offset?: number;

  positionOffset?: { x?: number; z?: number };

  onClick?: (planetRef: React.RefObject<Mesh | null>, distance?: number) => void;

  texture?: string;
  colour?: string;

  emissive?: string;
  emissiveIntensity?: number;

  fresnel?: boolean;
}
