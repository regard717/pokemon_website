const hotspots = document.querySelectorAll(".map-logo");

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("mouseenter", () => {
    hotspot.style.boxShadow = "0 22px 46px rgba(24, 40, 72, 0.28)";
  });

  hotspot.addEventListener("mouseleave", () => {
    hotspot.style.boxShadow = "";
  });
});
