import { det, dot, index, inv, matrix, multiply, range, subset } from "mathjs";
import {
  H_IPHONE,
  IPHONE_VISION_AT_T0,
  R_IPHONE,
  R_VISION_AT_T0,
  VISION_AT_T1_VISION_AT_T0,
} from "./copan-example";
import { framePosition, rotation_z, translation } from "./transfomations.js";
import { expectMatricesCloseTo } from "./test-helper";

describe("rototranslations", () => {
  test("valid homogeneous transformation matrices", () => {
    [
      H_IPHONE,
      IPHONE_VISION_AT_T0,
      R_IPHONE,
      R_VISION_AT_T0,
      VISION_AT_T1_VISION_AT_T0,
    ].forEach((P) => {
      const determinant = det(P);
      const want = 1;
      expect(determinant).toBeCloseTo(want);

      const R = extractRotationMatrix(P);

      const row1 = getRow(R, 1);
      const row2 = getRow(R, 2);
      const row3 = getRow(R, 3);

      // versor
      const dot_product_r1xr1 = dot(row1, row1);
      expect(dot_product_r1xr1).toBeCloseTo(1);

      // versor
      const dot_product_r2xr2 = dot(row2, row2);
      expect(dot_product_r2xr2).toBeCloseTo(1);

      // versor
      const dot_product_r3xr3 = dot(row3, row3);
      expect(dot_product_r3xr3).toBeCloseTo(1);

      // orthogonality
      const dot_product_r1xr2 = dot(row1, row2);
      expect(dot_product_r1xr2).toBeCloseTo(0);

      const dot_product_r1xr3 = dot(row1, row3);
      expect(dot_product_r1xr3).toBeCloseTo(0);

      const dot_product_r2xr3 = dot(row2, row3);
      expect(dot_product_r2xr3).toBeCloseTo(0);

      const col1 = getColumn(R, 1);
      const col2 = getColumn(R, 2);
      const col3 = getColumn(R, 3);

      // versor
      const dot_product_c1xc1 = dot(col1, col1);
      expect(dot_product_c1xc1).toBeCloseTo(1);

      // versor
      const dot_product_c2xc2 = dot(col2, col2);
      expect(dot_product_c2xc2).toBeCloseTo(1);

      // versor
      const dot_product_c3xc3 = dot(col3, col3);
      expect(dot_product_c3xc3).toBeCloseTo(1);

      // orthogonality
      const dot_product_c1xc2 = dot(col1, col2);
      expect(dot_product_c1xc2).toBeCloseTo(0);

      const dot_product_c1xc3 = dot(col1, col3);
      expect(dot_product_c1xc3).toBeCloseTo(0);

      const dot_product_c2xc3 = dot(col2, col3);
      expect(dot_product_c2xc3).toBeCloseTo(0);
    });
  });
  test("H respect to visor based on H respect to iPhone and a reference object", () => {
    const VISION_AT_T0_IPHONE = framePosition(R_IPHONE, R_VISION_AT_T0);

    const H_VISION_AT_T0 = multiply(inv(VISION_AT_T0_IPHONE), H_IPHONE);

    // known VISION_AT_T1_VISION_AT_T0
    const H_VISION_AT_T1 = multiply(
      inv(VISION_AT_T1_VISION_AT_T0),
      H_VISION_AT_T0
    );

    // Test???
  });
});

function getRow(M, r) {
  const [rs, cs] = M.size();
  return subset(M, index(r - 1, range(0, cs))).reshape([cs]);
}

function getColumn(M, c) {
  const [rs, cs] = M.size();
  return subset(M, index(range(0, rs), c - 1)).reshape([rs]);
}

function extractRotationMatrix(P) {
  return subset(P, index(range(0, 3), range(0, 3)));
}
