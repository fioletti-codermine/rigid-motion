import {
  ArrayNode,
  det,
  dot,
  index,
  matrix,
  range,
  subset,
  transpose,
} from "mathjs";

const P = matrix([
  [-0.64105463, 0.7674851, 0.0039187535, -0.55751944],
  [0.0102653075, 0.0136795, -0.9998537, 0.067828774],
  [-0.7674263, -0.6409208, -0.016647758, 1.6658874],
  [0.0, 0.0, 0.0, 0.9999999],
]);

describe("rototranslations", () => {
  test("rotation is ortonormal", () => {
    const R = matrix([
      [-0.64105463, 0.7674851, 0.0039187535],
      [0.0102653075, 0.0136795, -0.9998537],
      [-0.7674263, -0.6409208, -0.016647758],
    ]);

    const determinant = det(R);
    const want = 1;
    expect(determinant).toBeCloseTo(want);

    const row1 = getRow(R, 1);
    const row2 = getRow(R, 2);
    const row3 = getRow(R, 3);

    const dot_product_1x1 = dot(row1, row1);
    expect(dot_product_1x1).toBeCloseTo(1);

    const dot_product_1x2 = dot(row1, row2);
    expect(dot_product_1x2).toBeCloseTo(0);

    const dot_product_1x3 = dot(row1, row3);
    expect(dot_product_1x3).toBeCloseTo(0);

    const dot_product_2x3 = dot(row2, row3);
    expect(dot_product_2x3).toBeCloseTo(0);
  });
});

function getRow(M, r) {
  const [rs, cs] = M.size();
  return subset(M, index(r - 1, range(0, cs))).reshape([cs]);
}
