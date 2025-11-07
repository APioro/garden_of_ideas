const projects = [
  {
    image: "photos/apron.jpg",
    desc: "Elegant serif branding concept"
  },
  {
    image: "photos/logo.jpg",
    desc: "Botanical-inspired packaging"
  },
  {
    image: "photos/logo.jpg",
    desc: "Experimental typographic grid"
  },
  {
    image: "photos/logo.jpg",
    desc: "Botanical-inspired packaging"
  },
  {
    image: "photos/logo.jpg",
    desc: "Experimental typographic grid"
  },
  
  {
    image: "photos/logo.jpg",
    desc: "Botanical-inspired packaging"
  },
  {
    image: "photos/logo.jpg",
    desc: "Experimental typographic grid"
  },
    {
    image: "photos/logo.jpg",
    desc: "Botanical-inspired packaging"
  },
  {
    image: "photos/logo.jpg",
    desc: "Experimental typographic grid"
  },
    {
    image: "photos/logo.jpg",
    desc: "Botanical-inspired packaging"
  },
  {
    image: "photos/logo.jpg",
    desc: "Experimental typographic grid"
  },
    {
    image: "photos/logo.jpg",
    desc: "Botanical-inspired packaging"
  },
  {
    image: "photos/logo.jpg",
    desc: "Experimental typographic grid"
  },
  
  
];

const grid = document.getElementById("grid");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "flex flex-col";

  card.innerHTML = `
    <div class="aspect-[4/5] overflow-hidden rounded-md shadow-sm hover:shadow-lg transition">
      <img src="${p.image}" alt="${p.desc}" class="object-cover w-full h-full">
    </div>
    <p class="text-sm mt-2 text-gray-700">${p.desc}</p>
  `;
  grid.appendChild(card);
});
