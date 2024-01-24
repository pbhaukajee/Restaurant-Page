import cookies from "./images/cookies.jpg";
import croissant from "./images/croissant.jpg";
import cupcake from "./images/cupcake.jpg";
import cheesecake from "./images/cheesecake.jpg";
import tiramisu from "./images/tiramisu.jpg";
import cake from "./images/cake.jpg";

export default function () {
  const content = document.querySelector("#content");

  const items = document.createElement("div");
  items.classList.add("items");
  content.appendChild(items);

  const menuItems = [
    {
      src: cookies,
      name: "Choclolate chip cookies",
    },
    {
      src: croissant,
      name: "Croissants",
    },
    {
      src: cupcake,
      name: "Cupcakes",
    },
    {
      src: cheesecake,
      name: "Cheesecake",
    },
    {
      src: tiramisu,
      name: "Tiramisu",
    },
    {
      src: cake,
      name: "Vanilla Cake",
    },
  ];

  menuItems.forEach((item) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const images = document.createElement("img");
    images.src = item.src;
    images.alt = item.name;

    item.appendChild(images);

    const itemName = document.createElement("p");
    itemName.textContent = item.name;

    item.appendChild(itemName);
  });
}
