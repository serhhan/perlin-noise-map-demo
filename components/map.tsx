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
        p.noLoop();
        p.noiseSeed(11199610); // to have same noise pattern every time
      };

      p.draw = () => {
        p.loadPixels();
        for (let x = 0; x < p.width; x++) {
          for (let y = 0; y < p.height; y++) {
            const noiseValue = p.noise(x / zoomFactor, y / zoomFactor);

            let terrainColor;
            if (noiseValue < 0.4) {
              terrainColor = p.color(30, 176, 251);
            } else if (noiseValue < 0.5) {
              terrainColor = p.color(255, 246, 193);
            } else if (noiseValue < 0.7) {
              terrainColor = p.color(118, 239, 124);
            } else {
              terrainColor = p.color(22, 181, 141);
            }

            p.set(x, y, terrainColor);
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
