import { inv, multiply } from "mathjs";
import { framePosition, rotation_z, translation } from "./transfomations.js";
import { expectMatricesCloseTo } from "./test-helper.js";

describe("reference frame change", () => {
  test("frame A and B are in the same position", () => {
    // P respect to B (position and orientation, id est 4x4 matrix)
    const P_B = multiply(rotation_z(Math.PI / 2), translation(1, 0, 0));
    // R respect to B
    const R_B = multiply(rotation_z(0), translation(0, 0, 0));
    // R respect to A
    const R_A = R_B;
    // P respect to A
    const P_A = multiply(inv(R_A), R_B, P_B);

    expectMatricesCloseTo(P_A, P_B);
  });

  test("frame A is rotated around the z-axis by 45° counterclockwise", () => {
    // P respect to B (position and orientation, id est 4x4 matrix)
    const P_B = multiply(rotation_z(Math.PI / 4), translation(0, 0, 0));

    // R respect to B
    const R_B = multiply(rotation_z(0), translation(0, 0, 0));

    // R respect to A
    const R_A = multiply(rotation_z(-Math.PI / 4), translation(0, 0, 0));

    const A_B = framePosition(R_B, R_A);

    // P respect to A
    const P_A = multiply(inv(A_B), P_B);

    const want = multiply(rotation_z(0), translation(0, 0, 0));

    expectMatricesCloseTo(P_A, want);
  });

  test("frame A is rotated around the z-axis by 45° clockwise", () => {
    // P respect to B (position and orientation, id est 4x4 matrix)
    const P_B = multiply(rotation_z(Math.PI / 4), translation(0, 0, 0));

    // R respect to B
    const R_B = multiply(rotation_z(0), translation(0, 0, 0));

    // R respect to A
    const R_A = multiply(rotation_z(Math.PI / 4), translation(0, 0, 0));

    const A_B = framePosition(R_B, R_A);

    // P respect to A
    const P_A = multiply(inv(A_B), P_B);

    const want = multiply(rotation_z(Math.PI / 2), translation(0, 0, 0));

    expectMatricesCloseTo(P_A, want);
  });
});
