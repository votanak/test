const img = new Image();
let div = document.createElement('div');
div.className = 'alert';
img.src =
  'https://sun1-57.userapi.com/s/v1/if1/_Y_4QMdFCSQLyVdHkEmHRCd93FIxLhjo_50HHAKmnMi72R9sdOPKIWTlMM09gPku55U0M12O.jpg?size=960x1476&quality=96&crop=0,0,960,1476&ava=1';

img.onload = function () {
  div.innerHTML = `ширина: ${this.width} + 'x' + ${this.height}`;
  document.body.append(div);
  document.body.append(img);
};
