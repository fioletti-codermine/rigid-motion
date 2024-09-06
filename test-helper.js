import { deepEqual } from "mathjs";

export function expectMatricesCloseTo(actual, expected, precision = 2) {
  const actualSize = actual.size();
  const expectedSize = expected.size();

  // Check if the dimensions are the same
  if (!deepEqual(actualSize, expectedSize)) {
    throw new Error(
      `Matrix sizes differ: expected ${expectedSize} but got ${actualSize}`
    );
  }

  const [rows, cols] = actualSize;

  // Iterate through each element to compare values with precision
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const actualValue = actual.get([i, j]);
      const expectedValue = expected.get([i, j]);
      try {
        expect(actualValue).toBeCloseTo(expectedValue, precision);
      } catch (error) {
        // Enhance the error message with specific indices
        error.message += ` at row ${i + 1} and column ${
          j + 1
        } (expected ${expectedValue}, got ${actualValue})`;
        throw error;
      }
    }
  }
}
