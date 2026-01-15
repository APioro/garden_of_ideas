const projects = [
  {
    image: "photos/big_shape.jpg",
    desc: "Huge shape behind an object"
  },
  {
    image: "photos/small-typography-on-gigant-typography.jpg",
    desc: "Small typography on gigant typography"
  },
  {
    image: "photos/cutout-frame.jpg",
    hoverImage: "photos/cutout-frame-2.jpg",
    desc: "Cutout frame"
  },
  {
    image: "photos/cutouts.jpg",
    desc: "cutouts"
  },
  {
    image: "photos/object-over-type.jpg",
    hoverImage: "photos/object-over-type-2.jpg",
    desc: "Experimental typographic grid"
  },
  
  {
    image: "photos/pattern-from-text.jpg",
    desc: "Pattern from text"
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
      <img 
        src="${p.image}" 
        alt="${p.desc}" 
        class="object-cover w-full h-full transition"
      >
    </div>
    <p class="text-xs mt-1 font-semibold text-gray-800">${p.desc}</p>
  `;

  const img = card.querySelector("img");

  card.addEventListener("mouseenter", () => {
    if (p.hoverImage) img.src = p.hoverImage;
  });

  card.addEventListener("mouseleave", () => {
    img.src = p.image;
  });

  grid.appendChild(card);
});
