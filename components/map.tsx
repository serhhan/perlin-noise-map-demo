"use client";

// Import the terrainRanges array
import { terrainRanges } from "@/constants/terrain-ranges";
import { useEffect, useRef } from "react";
import p5 from "p5";

const Map = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const myP5 = new p5((p) => {
      // Convert terrainRanges colors to p5 Colors
      const p5TerrainRanges = terrainRanges.map((range) => ({
        ...range,
        startColor: p.color(...range.startColor),
        endColor: p.color(...range.endColor),
      }));

      p.setup = () => {
        p.createCanvas(600, 600);
        p.noLoop();
        p.noiseSeed(11199610);
      };

      p.draw = () => {
        p.loadPixels();
        for (let x = 0; x < p.width; x++) {
          for (let y = 0; y < p.height; y++) {
            const noiseValue = p.noise(x / 100, y / 100);
            let terrainColor = p.color(0); // Default color if no range matches

            // Find the appropriate terrain range based on the noise value
            for (const range of p5TerrainRanges) {
              if (noiseValue >= range.start && noiseValue <= range.end) {
                // Calculate the interpolation factor (t)
                const t =
                  (noiseValue - range.start) / (range.end - range.start);
                // Interpolate between the startColor and endColor of the current range
                terrainColor = p.lerpColor(range.startColor, range.endColor, t);
                break;
              }
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
