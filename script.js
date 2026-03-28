const hotspots = document.querySelectorAll(".map-logo");

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("mouseenter", () => {
    hotspot.style.boxShadow = "0 22px 46px rgba(24, 40, 72, 0.28)";
  });

  hotspot.addEventListener("mouseleave", () => {
    hotspot.style.boxShadow = "";
  });
});

const directory = document.querySelector("#global-center-directory");

if (directory && window.POKEMON_CENTERS) {
  const centers = Object.values(window.POKEMON_CENTERS);
  directory.innerHTML = centers
    .map(
      (center) => `
        <article class="directory-card">
          <p class="card-label">${center.region}</p>
          <h3>${center.name}</h3>
          <p>${center.hours}</p>
          <a class="secondary-link" href="./${center.file}">查看店鋪頁</a>
        </article>
      `
    )
    .join("");
}
