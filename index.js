const player = document.getElementById("player");
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", function () {
    playSong(this.id);
  });
});

function playSong(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  console.log("logs out", id);
}
