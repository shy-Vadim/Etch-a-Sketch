const container = document.getElementsByClassName(`container`);
for (i = 0 ; i < 16 * 16 ; i++) {
  const div = document.createElement("div");
  div.classList.add('container-box');
  container[0].appendChild(div);
}