let canvas = document.querySelector('#main_canvas') as HTMLCanvasElement;
let context = canvas.getContext('2d') as CanvasRenderingContext2D;

context.fillRect(0, 0, 100, 100);
console.log(canvas);
console.log('Hello JavaScript');