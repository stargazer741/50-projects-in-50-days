const sounds = [
  "bruh",
  "fbi",
  "noGodPlease",
  "twoHoursLater",
  "areYouSure",
  "amogus",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.innerText = sound;

  btn.classList.add("btn");

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
