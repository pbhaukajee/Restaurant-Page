// import cookies from "./images/cookies.jpg";
// import croissant from "./images/croissant.jpg";
// import cupcake from "./images/cupcake.jpg";
// import cheesecake from "./images/cheesecake.jpg";
// import tiramisu from "./images/tiramisu.jpg";
// import cake from "./images/cake.jpg";

export default function menu() {
  const content = document.querySelector("#content");

  const items = document.createElement("div");
  items.classList.add("items");
  content.appendChild(items);

  const menuItems = [
    {
      class: "cookies",
      name: "Choclolate chip cookies - $2.99",
    },
    {
      class: "croissant",
      name: "Croissants - $1.99",
    },
    {
      class: "cupcake",
      name: "Cupcakes - $3.99",
    },
    {
      class: "cheesecake",
      name: "Cheesecake - $4.35",
    },
    {
      class: "tiramisu",
      name: "Tiramisu - $4.35",
    },
    {
      class: "cake",
      name: "Vanilla Cake - $29.99",
    },
  ];

  menuItems.forEach((item) => {
    const menuDetails = document.createElement("div");
    menuDetails.classList.add("menu-details");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add(`${item.class}`);
    imageDiv.id = "images";
    menuDetails.appendChild(imageDiv);

    const itemName = document.createElement("p");
    itemName.classList.add("menu-p");
    itemName.textContent = item.name;
    menuDetails.appendChild(itemName);

    items.appendChild(menuDetails);
  });
}
