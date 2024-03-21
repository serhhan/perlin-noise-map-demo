export type TerrainRange = {
  start: number;
  end: number;
  startColor: [number, number, number]; // RGB Color
  endColor: [number, number, number]; // RGB Color
};

// Export the terrainRanges array
export const terrainRanges: TerrainRange[] = [
  {
    start: 0,
    end: 0.4,
    startColor: [30, 176, 251],
    endColor: [40, 255, 255],
  }, // water
  {
    start: 0.4,
    end: 0.5,
    startColor: [215, 192, 158],
    endColor: [255, 246, 193],
  }, // sand
  {
    start: 0.5,
    end: 0.7,
    startColor: [2, 166, 155],
    endColor: [118, 239, 124],
  }, // grass
  {
    start: 0.7,
    end: 1,
    startColor: [22, 181, 141],
    endColor: [10, 145, 113],
  }, // forest
];
