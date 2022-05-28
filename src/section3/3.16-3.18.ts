// 0 - 100 の乱数生成
function rnd(): number {
  let random: number = Math.random();
  random *= 100;
  return Math.floor(random);
}
console.log(rnd());

// easing function
// t = 0 - 1 が代入
// example ease
function ease<T>(t: T): T {
  return t;
}

// example ease-in
function easeIn(t: number): number {
  return t * t;
}

// example easeout
function easeOut(t: number): number {
  return t * (2 - t);
}

// example easeInOut
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t: -1 + (4 - 2 * t) * t;
}
console.log(easeInOut(0.5))