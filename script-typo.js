const projects = [
  {
    image: "photos/typo/scale-typography2.png",
    hoverImage: "photos/typo/scale-typography1.png",
    desc: `Dramatic / editorial → 1.5–1.618 <br>
           Intellectual → use tighter scale (1.25–1.333)`,
    tags: ["scale"]
  },
  {
    image: "photos/typo/kerrning2.png",
    hoverImage: "photos/typo/kerrning1.png",
    desc: `Tight kerning → modern, energetic <br>
           Loose kerning → luxury, calmness`,
    tags: ["kerning"]
  },
  {
    image: "photos/typo/mix-up-spacing.png",
    desc: `Do mix up spacing: MEDIUM → BIG → SMALL <br>
           (creates interesting rhythm)`,
    tags: ["spacing", "hierarchy"]
  },
 {
    image: "photos/typo/sharp-serif1.jpg",
    hoverImage: "photos/typo/sharp-serif2.jpg.png",
    desc: `Sharp serifs add authority, reliability and formality`,
    tags: ["serif" ]
  },
  {
    image: "photos/typo/rag1.jpg",
    desc: `Balance rag (no mountaintops or dents). <br>
    force paragraph break, change width of the column, add hyphenate to some words(!)`,
    tags: ["rag", "paragraph" ]
  }
];

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");

let activeTags = new Set();


// -------- Render Projects --------
function renderProjects(list) {
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "flex flex-col";

    card.innerHTML = `
      <div class="aspect-[4/5] overflow-hidden rounded-md shadow-sm hover:shadow-lg transition">
        <img src="${p.image}" class="object-cover w-full h-full transition duration-300">
      </div>

      <p class="text-sm mt-2 font-semibold text-gray-800">
        ${p.desc}
      </p>

      <div class="flex flex-wrap gap-2 mt-2">
        ${p.tags.map(tag => `
          <span 
            class="cursor-pointer underline text-sm ${activeTags.has(tag) ? 'text-black font-semibold' : 'text-gray-500'}"
            data-tag="${tag}">
            #${tag}
          </span>
        `).join("")}
      </div>
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
}


// -------- Render Filter Bar --------
function renderFilters() {
  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  filters.innerHTML = allTags.map(tag => `
    <span 
      class="cursor-pointer underline ${activeTags.has(tag) ? 'text-black font-semibold' : 'text-gray-500'}"
      data-tag="${tag}">
      #${tag}
    </span>
  `).join("");
}


// -------- Filter Logic --------
function applyFilters() {
  if (activeTags.size === 0) {
    renderProjects(projects);
    return;
  }

  const filtered = projects.filter(p =>
    [...activeTags].every(tag => p.tags.includes(tag))
  );

  renderProjects(filtered);
}


// -------- Click Handling (Event Delegation) --------
document.addEventListener("click", function (e) {
  const tag = e.target.dataset.tag;
  if (!tag) return;

  if (activeTags.has(tag)) {
    activeTags.delete(tag); // unselect
  } else {
    activeTags.add(tag); // select
  }

  renderFilters();
  applyFilters();
});


// -------- Initial Load --------
renderFilters();
renderProjects(projects);
