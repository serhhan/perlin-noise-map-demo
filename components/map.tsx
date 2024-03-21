"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

const Map = () => {
  const sketchRef = useRef(null);

  let zoomFactor = 100;

  useEffect(() => {
    const myP5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(600, 600);
        p.pixelDensity(1); // Ensures that the loop covers all pixels on the screen
        p.background(200);
        p.noLoop();
      };

      p.draw = () => {
        p.loadPixels();
        for (let x = 0; x < p.width; x++) {
          for (let y = 0; y < p.height; y++) {
            const noiseValue = p.noise(x / zoomFactor, y / zoomFactor);
            p.set(x, y, p.color(255 * noiseValue));
          }
        }
        p.updatePixels();
      };
    }, sketchRef.current!);

    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Map;
