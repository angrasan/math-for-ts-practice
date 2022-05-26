// 単位化された内積は必ずcosΘと等しくなる
let A: number[] = [1, 0];
let B: number[] = [5, -3];

let C: number[] = [30, -55];
let D: number[] = [-20, 20];

// 単位化ベクトル
function normalize(a: number[]): number[] {
  const sqrt = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
  return [a[0] / sqrt, a[1] / sqrt];
}

// 内積を求める
function dot(a: number[], b: number[]): number {
  return a[0] * b[0] + a[1] * b[1];
}

let W = normalize(A);
let X = normalize(B);
let Y = normalize(C);
let Z = normalize(D);
console.log({W});
console.log({X});
console.log({Y});
console.log({Z});

console.log(`W, X: ${dot(W, X)}`);
console.log(`Y, Z: ${dot(Y, Z)}`);


