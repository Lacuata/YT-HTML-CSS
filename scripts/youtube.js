import { youtubeVideo } from "../data/video.js";

let youtubeHTML = "";

youtubeVideo.map((youtube) => {
  console.log(youtube.videoTitle);

  youtubeHTML += `
    <div class="video-preview">
    <div class="thumbnail-row">
        <a href="${youtube.ytLink}" target="_blank">
            <img class="thumbnail" src="${youtube.thumbnailImage}" alt="" />
        </a>

      <div class="duration">${youtube.duration}</div>
    </div>

    <div class="video-info-grid">
      <div class="channel-picture">
        <div class="channel-picture-container">
        <a href="${youtube.ytLink}" target="_blank">
            <img
            class="profile-pic"
          src="${youtube.chImg}"
          alt=""
          />
        </a>
        </div>
      </div>

      <div class="channel-info">
        <p class="video-title">
            <a class="video-link" href="${youtube.ytLink}" target="_blank">
                
${youtube.videoTitle}
            </a>
        </p>
        <p class="video-author">
            <a class="video-author-name" href="${youtube.ytLink}" target="_blank">
               ${youtube.name}
            </a>
        </p>
        <p class="video-stat">${youtube.videoStatus}</p>
      </div>
    </div>
  </div>`;

  document.querySelector(".video-grid").innerHTML = youtubeHTML;
});

console.log(youtubeVideo);
