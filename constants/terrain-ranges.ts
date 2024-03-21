export type TerrainRange = {
  start: number;
  end: number;
  startColor: [number, number, number]; // RGB Color
  endColor: [number, number, number]; // RGB Color
};

// Export the terrainRanges array
export const worldTerrainRanges: TerrainRange[] = [
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

export const spaceTerrainRanges: TerrainRange[] = [
  {
    start: 0,
    end: 0.2,
    startColor: [0, 0, 8], // Deep space
    endColor: [25, 29, 77], // Distant nebula
  },
  {
    start: 0.2,
    end: 0.4,
    startColor: [25, 29, 77], // Distant nebula
    endColor: [255, 204, 111], // Star formation regions
  },
  {
    start: 0.4,
    end: 0.6,
    startColor: [255, 204, 111], // Star formation regions
    endColor: [75, 0, 130], // Intense nebula
  },
  {
    start: 0.6,
    end: 0.8,
    startColor: [75, 0, 130], // Intense nebula
    endColor: [0, 0, 8], // Deep space again for contrast
  },
  {
    start: 0.8,
    end: 1,
    startColor: [0, 0, 8], // Deep space
    endColor: [255, 255, 255], // Bright stars
  },
];
