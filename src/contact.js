export default function contact() {
  const content = document.querySelector("#content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  content.appendChild(contactDiv);

  const contactDetails = [
    {
      name: "Phone number:",
      info: "012-345-6789, 987-654-3210",
    },
    {
      name: "Email:",
      info: "bakewithlove@gmail.com",
    },
    {
      name: "Address:",
      info: "1234 Elm Street Cityville, Stateburg 54321, Countryland",
    },
  ];

  contactDetails.forEach((item) => {
    const details = document.createElement("div");
    details.classList.add("contact-details");

    const title = document.createElement("h1");
    title.textContent = item.name;
    details.appendChild(title);

    const information = document.createElement("p");
    information.textContent = item.info;
    details.appendChild(information);

    contactDiv.appendChild(details);
  });
}
