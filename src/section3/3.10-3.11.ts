// ベクトルA、ベクトルBの成す角度を内積を使って求める
let A: number[] = [5, 1];
let B: number[] = [-2, 3];

// 単位化
let C: number[] = normalize(A);
let D: number[] = normalize(B);
console.log({C});
console.log({D});

// 内積を求める
let dotValue = dot(C, D);
console.log({dotValue});

// 内積の結果はcosΘなのでアークサインでラジアンが得られる
let radian: number = Math.acos(dotValue);
console.log({radian});
let degree: number = radian / Math.PI * 180;
console.log({degree});


function normalize(q: number[]): number[] {
  const Q: number =  Math.sqrt(
    q[0] * q[0] + q[1] * q[1] 
  );
  return [q[0] / Q, q[1] / Q];
}

function dot<T>(c: T, d: T): number {
  return c[0] * d[0] + c[1] * d[1];
}

let deg: number = 180;
let rad: number = deg * Math.PI / 180;
console.log({rad});

deg = Math.PI * 180 / rad;
console.log({deg});