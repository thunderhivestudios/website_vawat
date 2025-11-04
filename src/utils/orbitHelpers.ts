import { BufferGeometry, Float32BufferAttribute, Vector3 } from "three";

/**
 * Static helper class for generating and working with orbit geometries.
 * Useful for visualizing or simulating elliptical and circular orbits.
 */
export class Helpers {
  /**
   * Creates an elliptical or circular orbit geometry.
   * @param orbitA - Semi-major axis (X radius)
   * @param orbitB - Semi-minor axis (Z radius)
   * @param segments - Number of segments (default: 128)
   * @param offset - Optional offset {x, z} to move the orbit center
   * @returns A Three.js BufferGeometry instance.
   */
  static createEllipseOrbit(
    orbitA: number,
    orbitB: number,
    segments: number = 128,
    offset: { x?: number; z?: number } = {}
  ): BufferGeometry {
    const positions: number[] = [];

    const ox = offset.x ?? 0;
    const oz = offset.z ?? 0;

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * orbitA + ox;
      const z = Math.sin(theta) * orbitB + oz;
      positions.push(x, 0, z);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geometry;
  }

  /**
   * Returns the position (as a Vector3) on the orbit at a given angle (radians).
   * @param orbitA - Semi-major axis
   * @param orbitB - Semi-minor axis
   * @param theta - Angle in radians
   * @returns A Vector3 position on the orbit.
   */
  static getPositionAtAngle(
    orbitA: number,
    orbitB: number,
    theta: number
  ): Vector3 {
    const x = Math.cos(theta) * orbitA;
    const z = Math.sin(theta) * orbitB;
    return new Vector3(x, 0, z);
  }

  /**
   * Returns an array of Vector3 points along the orbit path.
   * @param orbitA - Semi-major axis
   * @param orbitB - Semi-minor axis
   * @param segments - Number of points (default: 128)
   */
  static getOrbitPoints(
    orbitA: number,
    orbitB: number,
    segments: number = 128
  ): Vector3[] {
    const points: Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(this.getPositionAtAngle(orbitA, orbitB, theta));
    }
    return points;
  }
}
