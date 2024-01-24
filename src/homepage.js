export default function homepage() {
  const content = document.querySelector("#content");

  const homeRight = document.createElement("div");
  homeRight.classList.add("home-right");

  const title = document.createElement("h1");
  title.textContent = "Indulge in the world of sweet delights!";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Join us – where every bite tells a story, and every moment is a celebration of sweetness. Welcome to our bakery family!";

  console.log("Title element:", title);
  console.log("Paragraph element:", paragraph);

  content.appendChild(homeRight);
  homeRight.append(title, paragraph);
}
