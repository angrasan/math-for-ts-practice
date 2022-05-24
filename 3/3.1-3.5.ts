let degree: number = 160;
let radian: number = degToRad(degree);
console.log({radian});

// function degToRad(degree: number): number {
//   return (degree / 360) * (Math.PI * 2);
// }
function degToRad(degree: number): number {
  return degree * (Math.PI / 180);
}

let sin: number = Math.sin(radian);
let cos: number = Math.cos(radian);
console.log({sin});
console.log({cos});

// 座標A => degree方向にr分移動した座標Bを求める
let r: number = 3;
let A: number[] = [1.0, -3.0];
let B: number[] = [A[0] + cos * r, A[1] + sin * r];
console.log({B})