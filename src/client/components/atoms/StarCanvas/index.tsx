"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, ElementType } from "react";

interface StarCanvasProps {
  childrenElement: ElementType;
}

export default function StarCanvas({
  childrenElement: ChildrenElement,
}: Readonly<StarCanvasProps>): JSX.Element {
  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ChildrenElement />
        </Suspense>
      </Canvas>
    </div>
  );
}
