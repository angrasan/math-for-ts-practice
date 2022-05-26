// 回転行列
/**
 * ベクトルを回転させる
 * @param {Array<number>} vector - 回転させるベクトル
 * @param {number} radian - 回転量を表すベクトル
 * @return {Array<number>} - 回転を加えたベクトル
 */
function rotate2D<T>(degree: number, vec: T): number[] {
  const radian: number = degree * (Math.PI / 180);
  let sin: number = Math.sin(radian);
  let cos: number = Math.cos(radian);
  return [
    vec[0] * cos + vec[1] * -sin,
    vec[0] * sin + vec[1] * cos,
  ]
}

const result: number[] = rotate2D(40, [-2, 5]);
console.log(result);