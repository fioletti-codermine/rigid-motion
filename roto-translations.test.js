import {
  rotation_x,
  rotation_y,
  rotation_z,
  translation,
  combineTransformations,
} from "./transfomations.js";
import { matrix, deepEqual, inv, multiply } from "mathjs";
import { expectMatricesCloseTo } from "./test-helper.js";

describe("rototranslations", () => {
  test("inverse: α = π/4, β = π/4, γ = π/4, tx = 1, ty = 2, tz = 3", () => {
    const want = matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);
    const rototranslation = matrix([
      [1 / 2, -1 / 2, Math.sqrt(2) / 2, 1],
      [1 / 2, 1 / 2, -Math.sqrt(2) / 2, 2],
      [-Math.sqrt(2) / 2, Math.sqrt(2) / 2, 1 / 2, 3],
      [0, 0, 0, 1],
    ]);
    const inverse = inv(rototranslation);
    const identity = multiply(inverse, rototranslation);
    expectMatricesCloseTo(identity, want);
  });

  test("inverse: α = π/2, β = π/2, γ = π/2, tx = 1, ty = 2, tz = 3", () => {
    const want = matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);
    const rototranslation = matrix([
      [0, 0, 1, 1],
      [0, 1, 0, 2],
      [-1, 0, 0, 3],
      [0, 0, 0, 1],
    ]);
    const inverse = inv(rototranslation);
    const identity = multiply(inverse, rototranslation);
    expectMatricesCloseTo(identity, want);
  });

  test("α = π/2, β = π/2, γ = π/2, tx = 1, ty = 2, tz = 3", () => {
    const want = matrix([
      [0, 0, 1, 1],
      [0, 1, 0, 2],
      [-1, 0, 0, 3],
      [0, 0, 0, 1],
    ]);
    const combined = combineTransformations(
      rotation_x(Math.PI / 2),
      rotation_y(Math.PI / 2),
      rotation_z(Math.PI / 2),
      translation(1, 2, 3)
    );
    expectMatricesCloseTo(combined, want);
  });

  test("α = π/2", () => {
    const want = matrix([
      [1, 0, 0, 0],
      [0, 0, -1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
    ]);
    const x_rotation = rotation_x(Math.PI / 2);
    expectMatricesCloseTo(x_rotation, want);
  });

  test("β = π/2", () => {
    const want = matrix([
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [-1, 0, 0, 0],
      [0, 0, 0, 1],
    ]);
    const y_rotation = rotation_y(Math.PI / 2);
    expectMatricesCloseTo(y_rotation, want);
  });

  test("γ = π/2", () => {
    const want = matrix([
      [0, -1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);
    const z_rotation = rotation_z(Math.PI / 2);
    expectMatricesCloseTo(z_rotation, want);
  });
});
