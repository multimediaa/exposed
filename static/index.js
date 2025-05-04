document.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelectorAll(".exposed");
  const colorClasses = [
    "violet",
    "amethyst",
    "blue",
    "green",
    "lime",
    "yellow",
    "orange",
    "red"
  ];
  headline.forEach(exposed => {
    colorClasses.forEach(c => exposed.classList.remove(c));
  });
  const total = headline.length;
  headline.forEach((exposed, index) => {
    const colorIndex = (total - 1 - index) % colorClasses.length;
    exposed.classList.add(colorClasses[colorIndex]);
  });
});
