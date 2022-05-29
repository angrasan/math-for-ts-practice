// type Canvas = {
//   canvas: HTMLCanvasElement;
//   ctx: CanvasRenderingContext2D;
// }
(function () {
    window.addEventListener("load", function () {
        var canvas = document.querySelector("#main_canvas");
        var ctx = canvas.getContext("2d");
        initialize(canvas);
        render(ctx);
    }, false);
})();
function initialize(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function render(ctx) {
    drawLine(ctx, 100, 100, 200, 200, "#ff0000");
    drawRect(ctx, 200, 200, 100, 100, '#00ff00');
}
/**
 * 線分を描画
 * @param {number} x1 - 線分の始点のｘ座標
 * @param {number} y1 - 線分の始点のy座標
 * @param {number} x2 - 線分の終点のx座標
 * @param {number} y2 - 線分の終点のy座標
 * @param {string} [color] - 線を描画する色
 * @param {number} [width = 1] - 線幅
 */
function drawLine(ctx, x1, y1, x2, y2, color, width) {
    if (width === void 0) { width = 1; }
    if (color != null) {
        ctx.strokeStyle = color;
    }
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}
/**
 * 短形を描画
 * @param {number} x - 塗りつぶす短形の左上角のx座標
 * @param {number} Y - 塗りつぶす短形の左上角のy座標
 * @param {number} width - 塗りつぶす短形の横幅
 * @param {number} height - 塗りつぶす短形の高さ
 * @param {string} [color] - 短形を塗りつぶす色
 */
function drawRect(ctx, x, y, width, height, color) {
    if (color != null) {
        ctx.fillStyle = color;
    }
    ctx.fillRect(x, y, width, height);
}
