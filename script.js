const canvas = document.getElementsByClassName(`canvas`);
for (i = 0 ; i < 16 * 16 ; i++) {
  const div = document.createElement("div");
  div.classList.add('canvas-box');
  canvas[0].appendChild(div);
}