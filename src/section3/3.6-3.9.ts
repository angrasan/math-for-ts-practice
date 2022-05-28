let A: number[] = [-2, 2];
let B: number[] = [3, -1];
let V: number[] = [
  B[0] - A[0],
  B[1] - A[1]
];
console.log({V});

// ベクトルを単位化
let C = (v: number[]): number => {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}
console.log(C(V));
let D: number = C(V);

V[0] /= D;
V[1] /= D;
console.log({V});

let E: number[] = [5, -3];
let F: number[] = [-2, 6];

// ベクトルの加算
let G: number[] = [
  E[0] + F[0],
  E[1] + F[1]
];
console.log({G});

// ベクトルの減算
let H: number[] = [
  E[0] - F[0],
  E[1] - F[1]
];
console.log({H});

// スカラー倍
let scalar: number = 2.0;
let I: number[] = [
  H[0] * scalar,
  H[1] * scalar
];
console.log({I});