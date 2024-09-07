import { matrix, multiply, inv } from "mathjs";

export function rotation_x(alfa) {
  return matrix([
    [1, 0, 0, 0],
    [0, Math.cos(alfa), -Math.sin(alfa), 0],
    [0, Math.sin(alfa), Math.cos(alfa), 0],
    [0, 0, 0, 1],
  ]);
}

export function rotation_y(beta) {
  return matrix([
    [Math.cos(beta), 0, Math.sin(beta), 0],
    [0, 1, 0, 0],
    [-Math.sin(beta), 0, Math.cos(beta), 0],
    [0, 0, 0, 1],
  ]);
}

export function rotation_z(gamma) {
  return matrix([
    [Math.cos(gamma), -Math.sin(gamma), 0, 0],
    [Math.sin(gamma), Math.cos(gamma), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]);
}

export function translation(tx, ty, tz) {
  return matrix([
    [1, 0, 0, tx],
    [0, 1, 0, ty],
    [0, 0, 1, tz],
    [0, 0, 0, 1],
  ]);
}

export function combineTransformations(
  rotation_x,
  rotation_y,
  rotation_z,
  translation
) {
  return multiply(
    translation,
    multiply(rotation_z, multiply(rotation_y, rotation_x))
  );
}

// A respect to B based on third oject reference
export function framePosition(R_B, R_A) {
  return multiply(inv(R_A), R_B);
}
