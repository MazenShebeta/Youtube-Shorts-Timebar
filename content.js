document.addEventListener('spfdone ', function(e) {
  console.log('spfdone');
});

window.addEventListener('yt-page-data-updated', function () {
  console.log('yt-page-data-updated');
});




const timeBar = document.createElement("div");
timeBar.id = "timeBar";
timeBar.style.width = "100%";
timeBar.style.height = "10px";
timeBar.style.bottom = "0px";
timeBar.style.left = "0px";
timeBar.style.position = "fixed";
timeBar.style.backgroundColor = "black";
timeBar.style.zIndex = "9999";
timeBar.style.opacity = "0.8";
timeBar.style.transitionDuration = "0.2s";
timeBar.style.cursor = "pointer";

const container = document.querySelector(
  "#shorts-player > div.html5-video-container"
);
document.documentElement.appendChild(timeBar);

const progress = document.createElement("div");
progress.id = "progressTimeBar";
progress.style.width = "0%";
progress.style.height = "100%";
progress.style.backgroundColor = "red";
progress.style.transitionDuration = "0.2s";
progress.style.transitionProperty = "width";
progress.style.position = "-webkit-sticky";

timeBar.appendChild(progress);

timeBar.addEventListener("mouseover", () => {
  timeBar.style.height = "20px";
});

timeBar.addEventListener("mouseout", () => {
  timeBar.style.height = "10px";
});

timeBar.addEventListener("click", (e) => {
  const ytShorts = document.querySelector(
    "#shorts-player > div.html5-video-container > video"
  );
  const width = timeBar.getBoundingClientRect().width;
  const clickX = e.clientX - timeBar.getBoundingClientRect().left;
  const duration = ytShorts.duration;
  ytShorts.currentTime = (clickX / width) * duration;
});

// make function that always returns the current time
function getTime() {
  const ytShorts = document.querySelector(
    "#shorts-player > div.html5-video-container > video"
  );
  progress.style.width = `${(ytShorts.currentTime / ytShorts.duration) * 100}%`;
}
// set interval to run the function every 100ms
setInterval(getTime, 100);
