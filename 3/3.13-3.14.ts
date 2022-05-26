// ３次元ベクトルの外積を求める関数
function cross(vec0: number[], vec1: number[]): number[] {
  return [
    vec0[1] * vec1[2] - vec0[2] * vec1[1],
    vec0[2] * vec1[0] - vec0[0] * vec1[2],
    vec0[0] * vec1[1] - vec0[1] * vec1[0]
  ];
}

const A: number[] = [1, 2, 3]; 
const B: number[] = [-5, -3, -6];
console.log(`３次元: ${cross(A, B)}`); 

// ２次元の外積は必ずz成分が0になる為、スカラーになる
const C: number[] = [3, -5, 0];
const D: number[] = [-9, -4, 0];
console.log(`２次元: ${cross(C, D)}`);
