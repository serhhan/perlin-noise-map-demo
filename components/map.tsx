"use client";
import { useEffect, useRef } from "react";
import p5 from "p5";

const Map = () => {
  // Specify that the ref will be for an HTMLDivElement
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let myP5: p5;

    const Sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(600, 600);
        p.background(200);
        p.noLoop();
      };

      p.draw = () => {
        p.loadPixels();
        for (let x = 0; x < p.width; x++) {
          for (let y = 0; y < p.height; y++) {
            const index = (x + y * p.width) * 4;
            p.pixels[index] = p.random(255); // Red
            p.pixels[index + 1] = p.random(255); // Green
            p.pixels[index + 2] = p.random(255); // Blue
            p.pixels[index + 3] = 255; // Alpha
          }
        }
        p.updatePixels();
      };
    };

    if (sketchRef.current) {
      myP5 = new p5(Sketch, sketchRef.current);
    }

    return () => {
      if (myP5) {
        myP5.remove();
      }
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Map;
