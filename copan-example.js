import { inv, matrix } from "mathjs";

export const H_IPHONE = matrix([
  [0.9986488, 0.0066924137, -0.05152825, 0.03087369],
  [0.00023670238, 0.9910744, 0.133308, -0.17089449],
  [0.051960614, -0.13314043, 0.98973405, -0.9762002],
  [0.0, 0.0, 0.0, 1.0],
]);
export const IPHONE_VISION_AT_T0 = matrix([
  [0.338748, 0.9305376, -0.13910304, -0.26797736],
  [-0.0014534071, -0.14732619, -0.9890868, 1.2398005],
  [-0.94087607, 0.33525333, -0.04855399, 0.34281474],
  [0.0, 0.0, 0.0, 1.0000001],
]);
export const R_IPHONE = matrix([
  [-0.64105463, 0.7674851, 0.0039187535, -0.55751944],
  [0.0102653075, 0.0136795, -0.9998537, 0.067828774],
  [-0.7674263, -0.6409208, -0.016647758, 1.6658874],
  [0.0, 0.0, 0.0, 0.9999999],
]);
export const R_VISION_AT_T0 = matrix([
  [0.9449803, 0.32644138, 0.021173988, -1.7114491],
  [0.013038333, 0.027090376, -0.999548, 1.4627773],
  [-0.3268673, 0.94482917, 0.021343615, -1.79339],
  [0.0, 0.0, 0.0, 1.0000001],
]);
export const VISION_AT_T1_VISION_AT_T0 = matrix([
  [0.4029531, 0.20376804, -0.89224845, -0.5247206],
  [0.026924983, 0.97183865, 0.23410426, 1.4243329],
  [0.91482455, -0.118356824, 0.38611898, 0.12510711],
  [0.0, 0.0, 0.0, 1.0],
]);
// export const VISION_T1_VISION_AT_T0 = matrix([
//   [0.4029531, 0.20376804, -0.89224845, -0.5247206],
//   [0.026924983, 0.97183865, 0.23410426, 1.4243329],
//   [0.91482455, -0.118356824, 0.38611898, 0.12510711],
//   [0.0, 0.0, 0.0, 1.0],
// ]);

// Sistema 1
// [0.0,0.0,0.0]

// Immagine di riferimento vista da iPhone:
// [-0.64105463, 0.0102653075, -0.7674263, 0.0, 0.7674851, 0.0136795, -0.6409208, 0.0, 0.0039187535, -0.9998537, -0.016647758, 0.0, -0.55751944, 0.067828774, 1.6658874, 0.9999999]

// Posizione testa visto da iPhone
// [0.9986488, 0.00023670238, 0.051960614, 0.0, 0.0066924137, 0.9910744, -0.13314043, 0.0, -0.05152825, 0.133308, 0.98973405, 0.0, 0.03087369, -0.17089449, -0.9762002, 1.0]

// Sistema 2
// [0.0,0.0,0.0]

// Immagine di riferimento vista da visionOS:
// [0.9449803, 0.013038333, -0.3268673, 0.0, 0.32644138, 0.027090376, 0.94482917, 0.0, 0.021173988, -0.999548, 0.021343615, 0.0, -1.7114491, 1.4627773, -1.79339, 1.0000001]

// Posso trascurarlo
// iPhone visto da visionOS
// [0.338748, -0.0014534071, -0.94087607, 0.0, 0.9305376, -0.14732619, 0.33525333, 0.0, -0.13910304, -0.9890868, -0.04855399, 0.0, -0.26797736, 1.2398005, 0.34281474, 1.0000001]

// Posizione visionOS per visionOS
// [0.4029531, 0.026924983, 0.91482455, 0.0, 0.20376804, 0.97183865, -0.118356824, 0.0, -0.89224845, 0.23410426, 0.38611898, 0.0, -0.5247206, 1.4243329, 0.12510711, 1.0]

// R_IPHONE=[-0.64105463, 0.0102653075, -0.7674263, 0.0, 0.7674851, 0.0136795, -0.6409208, 0.0, 0.0039187535, -0.9998537, -0.016647758, 0.0, -0.55751944, 0.067828774, 1.6658874, 0.9999999]
// H_IPHONE=[0.9986488, 0.00023670238, 0.051960614, 0.0, 0.0066924137, 0.9910744, -0.13314043, 0.0, -0.05152825, 0.133308, 0.98973405, 0.0, 0.03087369, -0.17089449, -0.9762002, 1.0]
// R_VISION=[0.9449803, 0.013038333, -0.3268673, 0.0, 0.32644138, 0.027090376, 0.94482917, 0.0, 0.021173988, -0.999548, 0.021343615, 0.0, -1.7114491, 1.4627773, -1.79339, 1.0000001]
// IPHONE_VISION=[0.338748, -0.0014534071, -0.94087607, 0.0, 0.9305376, -0.14732619, 0.33525333, 0.0, -0.13910304, -0.9890868, -0.04855399, 0.0, -0.26797736, 1.2398005, 0.34281474, 1.0000001]
// VISION_VISION_0=[0.4029531, 0.026924983, 0.91482455, 0.0, 0.20376804, 0.97183865, -0.118356824, 0.0, -0.89224845, 0.23410426, 0.38611898, 0.0, -0.5247206, 1.4243329, 0.12510711, 1.0]
// [-0.64105463, 0.0102653075, -0.7674263, 0.0, 0.7674851,  0.0136795,   -0.6409208, 0.0, 0.0039187535, -0.9998537, -0.016647758, 0.0, -0.55751944, 0.067828774, 1.6658874, 0.9999999]

//Camera posteriore RIFERIMENTO
// "TRACKING IMAGE 1: SIMD3<Float>(-0.009545861, 0.20340817, -0.30295458)"

//Camera aNTERIORE
// "TRACKING FACE 1: SIMD3<Float>(-0.01859564, 0.22324592, -0.40370595)"

// "TRACKING IMAGE NOW p1: SIMD3<Float>(-0.009545861, 0.20340817, -0.30295458)"
