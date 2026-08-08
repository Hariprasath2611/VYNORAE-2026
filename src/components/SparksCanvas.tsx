import React, { useRef } from "react";
import { useSparksCanvas } from "@/hooks/useSparksCanvas";

export const SparksCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useSparksCanvas(canvasRef);

  return <canvas id="sparksCanvas" ref={canvasRef} />;
};
