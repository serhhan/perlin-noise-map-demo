"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

const Map = () => {
  const sketchRef = useRef(null);

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
            const index = (x + y * p.width) * 4;
            p.pixels[index] = p.random(255);
            p.pixels[index + 1] = p.random(255);
            p.pixels[index + 2] = p.random(255);
            p.pixels[index + 3] = 255;
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
