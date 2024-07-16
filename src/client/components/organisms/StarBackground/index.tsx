"use client";

import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import {
  Points as PointsRef,
  PointsMaterial as PointsMaterialProps,
  Color,
} from "three";

export default function StarBackground(): JSX.Element {
  const ref = useRef<PointsRef>(null);
  const [sphere] = useState(
    () =>
      random.inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array
  );

  const pointsMaterialProps: Partial<PointsMaterialProps> = useMemo(
    () => ({
      transparent: true,
      color: new Color(0xfff),
      size: 0.002,
      sizeAttenuation: true,
      depthWrite: false,
    }),
    []
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  console.log("sphere", sphere);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial {...pointsMaterialProps} />
      </Points>
    </group>
  );
}
