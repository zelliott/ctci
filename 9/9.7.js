var Ctci = function() {};

Ctci.prototype.paintFill = function(screen, pointY, pointX, color) {
  var oldColor = screen[pointY][pointX];

  screen[pointY][pointX] = color;

  if (pointY - 1 >= 0 && screen[pointY - 1][pointX] === oldColor) {
    this.paintFill(screen, pointY - 1, pointX, color);
  }

  if (pointY + 1 < screen.length && screen[pointY + 1][pointX] === oldColor) {
    this.paintFill(screen, pointY + 1, pointX, color);
  }

  if (pointX - 1 >= 0 && screen[pointY][pointX - 1] === oldColor) {
    this.paintFill(screen, pointY, pointX - 1, color);
  }

  if (pointX + 1 < screen[pointY].length && screen[pointY][pointX + 1] === oldColor) {
    this.paintFill(screen, pointY, pointX + 1, color);
  }
};

module.exports = new Ctci();
