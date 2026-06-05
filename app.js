const meals = [
  {
    id: "IMG_0277",
    date: "2026-03-01",
    title: "Steak Plates and Roast Potatoes",
    tone: "teal",
    tags: ["steak", "date-night", "vegetables", "western"],
    dishes: [
      { name: "Ribeye steak", type: "steak", group: "protein" },
      { name: "Roasted baby potatoes", type: "potato", group: "side" },
      { name: "Sauteed mushrooms", type: "mushroom", group: "side" },
      { name: "Steamed broccoli", type: "vegetable", group: "side" },
      { name: "Cherry tomato salad", type: "salad", group: "side" }
    ]
  },
  {
    id: "IMG_0345",
    date: "2026-03-07",
    title: "Dumplings, Fish, and Ribs",
    tone: "blue",
    tags: ["dumplings", "seafood", "ribs", "chinese"],
    dishes: [
      { name: "Boiled dumplings", type: "dumpling", group: "main" },
      { name: "Steamed whole fish", type: "fish", group: "protein" },
      { name: "Braised pork ribs", type: "ribs", group: "protein" },
      { name: "Garlic napa cabbage", type: "vegetable", group: "side" }
    ]
  },
  {
    id: "IMG_0445",
    date: "2026-03-16",
    title: "Creamy Seafood Pasta",
    tone: "tomato",
    tags: ["pasta", "seafood", "vegetables", "western"],
    dishes: [
      { name: "Creamy salmon tomato fettuccine", type: "pasta", group: "main" },
      { name: "Asparagus and zucchini", type: "vegetable", group: "side" }
    ]
  },
  {
    id: "IMG_0597",
    date: "2026-03-27",
    title: "Fish, Lobster Rice, and Greens",
    tone: "leaf",
    tags: ["seafood", "rice", "chicken", "chinese"],
    dishes: [
      { name: "Lobster fried rice", type: "seafood-rice", group: "main" },
      { name: "Steamed fish", type: "fish", group: "protein" },
      { name: "Soy sauce chicken", type: "chicken", group: "protein" },
      { name: "King oyster mushrooms", type: "mushroom", group: "side" },
      { name: "Garlic greens", type: "vegetable", group: "side" }
    ]
  },
  {
    id: "IMG_0674",
    date: "2026-04-05",
    title: "Roast Duck and Mapo Tofu",
    tone: "mustard",
    tags: ["rice", "tofu", "duck", "chinese"],
    dishes: [
      { name: "Roast duck", type: "chicken", group: "protein" },
      { name: "Mapo tofu", type: "tofu", group: "main" },
      { name: "Garlic lettuce", type: "vegetable", group: "side" },
      { name: "White rice", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1027",
    date: "2026-05-03",
    title: "Beef Noodles and Strawberry Salad",
    tone: "plum",
    tags: ["noodles", "beef", "salad", "soup"],
    dishes: [
      { name: "Beef pepper noodles", type: "noodle", group: "main" },
      { name: "Cream soup", type: "soup", group: "side" },
      { name: "Strawberry green salad", type: "salad", group: "side" }
    ]
  },
  {
    id: "IMG_1053",
    date: "2026-05-08",
    title: "Pistachio Berry Cake",
    tone: "leaf",
    tags: ["dessert", "cake", "berries"],
    dishes: [
      { name: "Pistachio berry cream cake", type: "cake", group: "dessert" }
    ]
  },
  {
    id: "IMG_1092",
    date: "2026-05-12",
    title: "Ribs, Rice, and Tomato Tofu",
    tone: "tomato",
    tags: ["ribs", "rice", "tofu", "chinese"],
    dishes: [
      { name: "BBQ ribs", type: "ribs", group: "protein" },
      { name: "Tomato tofu", type: "tofu", group: "side" },
      { name: "Garlic napa cabbage", type: "vegetable", group: "side" },
      { name: "White rice", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1148",
    date: "2026-05-21",
    title: "Tomato Beef Stew Night",
    tone: "blue",
    tags: ["stew", "rice", "tofu", "vegetables"],
    dishes: [
      { name: "Tomato beef stew", type: "stew", group: "main" },
      { name: "Mushroom chicken stir-fry", type: "mushroom", group: "protein" },
      { name: "Garlic spinach", type: "vegetable", group: "side" },
      { name: "Silken tofu with scallions", type: "tofu", group: "side" },
      { name: "White rice", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1182",
    date: "2026-05-24",
    title: "Clam Soup and Braised Ribs",
    tone: "teal",
    tags: ["seafood", "ribs", "rice", "chinese"],
    dishes: [
      { name: "Clam tofu soup", type: "soup", group: "main" },
      { name: "Braised pork ribs", type: "ribs", group: "protein" },
      { name: "Minced pork sauce", type: "stew", group: "side" },
      { name: "Stir-fried water spinach", type: "vegetable", group: "side" },
      { name: "White rice", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1193",
    date: "2026-05-26",
    title: "Tomato Beef Stew and Crispy Chicken",
    tone: "mustard",
    tags: ["stew", "chicken", "rice", "vegetables"],
    dishes: [
      { name: "Tomato beef stew", type: "stew", group: "main" },
      { name: "Crispy fried chicken", type: "chicken", group: "protein" },
      { name: "Green pepper stir-fry", type: "vegetable", group: "side" },
      { name: "Broccoli greens", type: "vegetable", group: "side" },
      { name: "White rice", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1251",
    date: "2026-06-03",
    title: "Zha Jiang Noodles",
    tone: "plum",
    tags: ["noodles", "pork", "salad", "chinese"],
    dishes: [
      { name: "Zha jiang hand-pulled noodles", type: "noodle", group: "main" },
      { name: "Cucumber strips", type: "vegetable", group: "side" },
      { name: "Green salad", type: "salad", group: "side" }
    ]
  }
];

const filters = [
  { id: "all", label: "All" },
  { id: "favorites", label: "Saved" },
  { id: "chinese", label: "Chinese" },
  { id: "seafood", label: "Seafood" },
  { id: "noodles", label: "Noodles" },
  { id: "rice", label: "Rice" },
  { id: "vegetables", label: "Veg-heavy" },
  { id: "dessert", label: "Dessert" }
];

const state = {
  activeFilter: "all",
  query: "",
  favorites: new Set(JSON.parse(localStorage.getItem("dinnerLogFavorites") || "[]"))
};

const els = {
  grid: document.getElementById("mealGrid"),
  filters: document.getElementById("filters"),
  search: document.getElementById("searchInput"),
  mealCount: document.getElementById("mealCount"),
  dishCount: document.getElementById("dishCount"),
  favoriteCount: document.getElementById("favoriteCount"),
  choicePanel: document.getElementById("choicePanel"),
  pickDinner: document.getElementById("pickDinner"),
  emptyState: document.getElementById("emptyState"),
  dialog: document.getElementById("mealDialog"),
  dialogBody: document.getElementById("dialogBody"),
  dialogClose: document.getElementById("dialogClose")
};

function photoPath(meal, size = "thumbs") {
  return `assets/${size}/${meal.id}.jpg`;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(`${dateString}T12:00:00`));
}

function dishCount() {
  return meals.reduce((total, meal) => total + meal.dishes.length, 0);
}

function allMealText(meal) {
  return [
    meal.title,
    meal.date,
    formatDate(meal.date),
    ...meal.tags,
    ...meal.dishes.flatMap((dish) => [dish.name, dish.type, dish.group])
  ].join(" ").toLowerCase();
}

function getVisibleMeals() {
  return meals.filter((meal) => {
    const matchesFilter =
      state.activeFilter === "all" ||
      (state.activeFilter === "favorites" && state.favorites.has(meal.id)) ||
      meal.tags.includes(state.activeFilter);

    const matchesQuery = !state.query || allMealText(meal).includes(state.query);
    return matchesFilter && matchesQuery;
  });
}

function saveFavorites() {
  localStorage.setItem("dinnerLogFavorites", JSON.stringify([...state.favorites]));
  els.favoriteCount.textContent = state.favorites.size;
}

function setFilter(id) {
  state.activeFilter = id;
  renderFilters();
  renderMeals();
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  saveFavorites();
  renderMeals();
}

function renderFilters() {
  els.filters.innerHTML = filters.map((filter) => `
    <button
      class="filter-button ${state.activeFilter === filter.id ? "is-active" : ""}"
      type="button"
      role="tab"
      aria-selected="${state.activeFilter === filter.id}"
      data-filter="${filter.id}"
    >${filter.label}</button>
  `).join("");
}

function renderMeals() {
  const visibleMeals = getVisibleMeals();
  els.mealCount.textContent = visibleMeals.length;
  els.dishCount.textContent = visibleMeals.reduce((total, meal) => total + meal.dishes.length, 0);
  els.emptyState.hidden = visibleMeals.length > 0;

  els.grid.innerHTML = visibleMeals.map((meal) => {
    const dishes = meal.dishes.slice(0, 5);
    const tags = meal.tags.slice(0, 3).map((tag) => `<span class="tag">#${tag}</span>`).join("");
    const dishTokens = dishes.map((dish) => `<div class="dish-token" title="${escapeHtml(dish.name)}">${dishSvg(dish.type)}</div>`).join("");
    const chips = meal.dishes.map((dish) => `<span class="dish-chip">${escapeHtml(dish.name)}</span>`).join("");
    const isFavorite = state.favorites.has(meal.id);

    return `
      <article class="meal-card" data-id="${meal.id}" data-tone="${meal.tone}">
        <button class="favorite-button ${isFavorite ? "is-on" : ""}" type="button" data-favorite="${meal.id}" aria-label="${isFavorite ? "Remove saved meal" : "Save meal"}">
          ${isFavorite ? "&#9829;" : "&#9825;"}
        </button>
        <img src="${photoPath(meal)}" alt="${escapeHtml(meal.title)}">
        <div class="card-body">
          <div class="card-kicker">
            <span>${formatDate(meal.date)}</span>
            <span class="season-dot" aria-hidden="true"></span>
          </div>
          <h2>${escapeHtml(meal.title)}</h2>
          <div class="dish-strip" aria-hidden="true">${dishTokens}</div>
          <div class="dish-chips">${chips}</div>
          <div class="card-footer">
            <div class="tag-row">${tags}</div>
            <button class="card-action" type="button" data-open="${meal.id}">Open</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function pickDinner() {
  const visibleMeals = getVisibleMeals();
  const pool = visibleMeals.length ? visibleMeals : meals;
  const meal = pool[Math.floor(Math.random() * pool.length)];
  const mainDish = meal.dishes.find((dish) => dish.group === "main") || meal.dishes[0];

  els.choicePanel.hidden = false;
  els.choicePanel.innerHTML = `
    <div class="choice-card">
      <img src="${photoPath(meal)}" alt="${escapeHtml(meal.title)}">
      <div>
        <h2>${escapeHtml(mainDish.name)}</h2>
        <p>${escapeHtml(meal.title)} · ${formatDate(meal.date)}</p>
      </div>
      <button type="button" data-open="${meal.id}">Open</button>
    </div>
  `;
}

function openMeal(id) {
  const meal = meals.find((item) => item.id === id);
  if (!meal) return;

  const dishItems = meal.dishes.map((dish) => `
    <li>
      <div class="dish-hero" aria-hidden="true">${dishSvg(dish.type)}</div>
      <div>
        <strong>${escapeHtml(dish.name)}</strong>
        <span>${escapeHtml(dish.group)}</span>
      </div>
    </li>
  `).join("");

  const tags = meal.tags.map((tag) => `<span class="stat-chip">#${escapeHtml(tag)}</span>`).join("");
  const isFavorite = state.favorites.has(meal.id);

  els.dialogBody.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-photo">
        <img src="${photoPath(meal, "photos")}" alt="${escapeHtml(meal.title)}">
      </div>
      <div class="dialog-content">
        <div>
          <p class="eyebrow">${formatDate(meal.date)}</p>
          <h2>${escapeHtml(meal.title)}</h2>
        </div>
        <div class="dialog-meta">
          <span class="stat-chip">${meal.dishes.length} dishes</span>
          ${tags}
        </div>
        <ul class="dish-list">${dishItems}</ul>
        <div class="dialog-actions">
          <button class="dialog-action" type="button" data-favorite="${meal.id}">${isFavorite ? "Unsave" : "Save"}</button>
        </div>
      </div>
    </div>
  `;

  if (!els.dialog.open) {
    els.dialog.showModal();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function dishSvg(type) {
  const color = {
    steak: "#8f3f32",
    potato: "#e0ad4f",
    mushroom: "#b9835b",
    vegetable: "#4e9f58",
    salad: "#65a95c",
    dumpling: "#f2d49c",
    fish: "#89a9bc",
    ribs: "#9b493d",
    pasta: "#e7bc61",
    "seafood-rice": "#e5b946",
    chicken: "#c77842",
    tofu: "#f7dfb6",
    rice: "#ffffff",
    noodle: "#d79c48",
    soup: "#d89f58",
    cake: "#f3e3c9",
    stew: "#c2563f"
  }[type] || "#e4b441";

  const templates = {
    steak: `
      <path class="ink" fill="${color}" d="M38 64c-8-14 6-30 24-31 14-1 31 8 31 23 0 17-16 29-33 27-12-1-20-5-22-19z"/>
      <path class="ink thin" fill="none" d="M51 48c8 9 24 5 32 14M49 64c14-2 23 2 31 9"/>
      <circle class="ink thin" cx="38" cy="84" r="7" fill="#e0ad4f"/>
      <circle class="ink thin" cx="85" cy="37" r="7" fill="#5aa95a"/>`,
    potato: `
      <circle class="ink" cx="43" cy="59" r="13" fill="${color}"/>
      <circle class="ink" cx="64" cy="48" r="12" fill="${color}"/>
      <circle class="ink" cx="73" cy="72" r="14" fill="${color}"/>
      <path class="ink thin" fill="none" d="M37 57l8 5M58 45l8 4M69 72l10 3"/>`,
    mushroom: `
      <path class="ink" fill="${color}" d="M31 60c2-17 16-28 32-27 16 0 29 11 31 27-12 6-49 6-63 0z"/>
      <path class="ink" fill="#f0cf9e" d="M50 61h24l4 23c-8 5-20 5-29 0z"/>
      <path class="ink thin" fill="none" d="M39 56c12 3 36 3 50 0"/>`,
    vegetable: `
      <path class="ink" fill="${color}" d="M33 73c18-2 28-20 26-37-17 4-29 18-26 37z"/>
      <path class="ink" fill="#6fbd59" d="M58 78c20-2 31-20 29-38-18 3-31 18-29 38z"/>
      <path class="ink thin" fill="none" d="M43 66c7-10 12-20 16-30M69 70c8-11 13-21 18-30"/>`,
    salad: `
      <path class="ink" fill="#dcebc5" d="M31 61c12 22 45 29 64 0z"/>
      <path class="ink" fill="#63a95b" d="M40 55c4-15 18-19 27-8 8-10 25-5 25 10-18 11-34 11-52-2z"/>
      <circle class="ink thin" cx="48" cy="51" r="6" fill="#e24d40"/>
      <circle class="ink thin" cx="75" cy="50" r="6" fill="#e24d40"/>`,
    dumpling: `
      <path class="ink" fill="${color}" d="M26 70c8-24 48-34 68 0-17 15-55 15-68 0z"/>
      <path class="ink thin" fill="none" d="M39 62c3 8 7 12 12 15M52 56c3 10 8 16 14 20M67 56c4 9 9 14 16 17"/>`,
    fish: `
      <path class="ink" fill="${color}" d="M30 62c15-19 43-20 61 0-18 20-46 19-61 0z"/>
      <path class="ink" fill="#89a9bc" d="M91 62l17-13v26z"/>
      <circle cx="47" cy="57" r="3.5" fill="#211b18"/>
      <path class="ink thin" fill="none" d="M62 48c4 9 4 18 0 28M73 49c4 8 4 17 0 25"/>`,
    ribs: `
      <path class="ink" fill="#d8b98e" d="M32 53h56c6 0 10 5 10 11s-4 11-10 11H32c-6 0-10-5-10-11s4-11 10-11z"/>
      <path class="ink" fill="${color}" d="M31 44c14 7 38 8 65 0l-8 35c-18 6-35 5-54 0z"/>
      <path class="ink thin" fill="none" d="M47 50l-4 27M62 51l-2 29M78 50l4 27"/>`,
    pasta: `
      <path class="ink" fill="#fff8e7" d="M28 72c15 18 57 18 72 0 1 24-72 24-72 0z"/>
      <path class="ink thin" fill="none" d="M36 58c14-18 25 16 39-2 11-14 19 4 22 14M35 70c17-16 28 7 44-5 10-8 17-1 20 5"/>
      <rect class="ink thin" x="46" y="49" width="11" height="9" rx="2" fill="#e24d40"/>
      <rect class="ink thin" x="72" y="61" width="11" height="9" rx="2" fill="#e24d40"/>`,
    "seafood-rice": `
      <path class="ink" fill="#fff8e7" d="M27 72c16 20 58 20 74 0 0 24-74 24-74 0z"/>
      <path class="ink" fill="${color}" d="M34 62c10-21 51-23 61 0-13 12-47 13-61 0z"/>
      <path class="ink thin" fill="#e86b3d" d="M68 46c11-11 25-6 26 7-11 4-21 2-26-7z"/>
      <circle cx="50" cy="59" r="3" fill="#ffffff"/>
      <circle cx="62" cy="66" r="3" fill="#ffffff"/>
      <circle cx="80" cy="59" r="3" fill="#ffffff"/>`,
    chicken: `
      <path class="ink" fill="${color}" d="M33 66c3-20 19-31 38-27 14 3 24 14 23 29-17 12-42 14-61 0z"/>
      <path class="ink thin" fill="#f0c789" d="M47 66c7-13 23-17 39-10-8 10-25 14-39 10z"/>
      <path class="ink thin" fill="none" d="M45 50c12 2 24 1 36-3"/>`,
    tofu: `
      <rect class="ink" x="31" y="43" width="25" height="24" rx="4" fill="${color}"/>
      <rect class="ink" x="59" y="47" width="28" height="26" rx="4" fill="${color}"/>
      <rect class="ink" x="42" y="69" width="30" height="22" rx="4" fill="${color}"/>
      <path class="ink thin" fill="none" d="M34 37c12-6 26-6 43-2"/>`,
    rice: `
      <path class="ink" fill="#fff8e7" d="M29 72c15 18 57 18 72 0 1 24-72 24-72 0z"/>
      <path class="ink" fill="${color}" d="M35 63c11-23 48-26 60 0-17 9-43 9-60 0z"/>
      <path class="ink thin" fill="none" d="M45 58l8 6M59 52l7 7M73 58l8 6"/>`,
    noodle: `
      <path class="ink" fill="#fff8e7" d="M28 72c15 18 57 18 72 0 1 24-72 24-72 0z"/>
      <path class="ink thin" fill="none" d="M35 55c16 18 28-16 45 2 8 8 14 7 20 0M36 66c17 14 27-10 42 1 9 7 17 4 23-2"/>
      <rect class="ink thin" x="46" y="48" width="12" height="9" rx="2" fill="#8b4b34"/>
      <path class="ink thin" fill="#d6efd2" d="M38 76l19-6-10 12z"/>`,
    soup: `
      <path class="ink" fill="#fff8e7" d="M27 69c17 22 58 22 75 0 0 25-75 25-75 0z"/>
      <ellipse class="ink" cx="64" cy="63" rx="36" ry="16" fill="${color}"/>
      <circle cx="51" cy="61" r="3" fill="#fff2ce"/>
      <circle cx="68" cy="58" r="3" fill="#fff2ce"/>
      <path class="ink thin" fill="none" d="M42 43c-5-7 4-9 0-16M65 42c-5-7 4-9 0-16"/>`,
    cake: `
      <path class="ink" fill="${color}" d="M34 53h59v33c-14 8-44 8-59 0z"/>
      <path class="ink" fill="#fffdf8" d="M34 48c10-12 47-13 59 0v12c-16 8-43 8-59 0z"/>
      <path class="ink thin" fill="none" d="M35 68c15 6 43 6 57 0"/>
      <circle class="ink thin" cx="49" cy="45" r="6" fill="#26313b"/>
      <circle class="ink thin" cx="79" cy="43" r="6" fill="#8d2638"/>`,
    stew: `
      <path class="ink" fill="#fff8e7" d="M27 70c17 22 58 22 75 0 0 25-75 25-75 0z"/>
      <ellipse class="ink" cx="64" cy="64" rx="36" ry="17" fill="${color}"/>
      <rect class="ink thin" x="45" y="56" width="13" height="10" rx="2" fill="#e7bc61"/>
      <circle class="ink thin" cx="72" cy="59" r="7" fill="#e45f45"/>
      <rect class="ink thin" x="78" y="66" width="12" height="9" rx="2" fill="#8f3f32"/>`
  };

  return `
    <svg class="cartoon-plate" viewBox="0 0 120 120" role="img" aria-label="${type}">
      <circle class="plate" cx="60" cy="60" r="52"/>
      <circle class="rim" cx="60" cy="60" r="41"/>
      ${templates[type] || templates.stew}
    </svg>
  `;
}

els.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setFilter(button.dataset.filter);
});

els.search.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderMeals();
});

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open]");
  if (openButton) {
    openMeal(openButton.dataset.open);
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    if (els.dialog.open) openMeal(favoriteButton.dataset.favorite);
  }
});

els.pickDinner.addEventListener("click", pickDinner);
els.dialogClose.addEventListener("click", () => els.dialog.close());
els.dialog.addEventListener("click", (event) => {
  if (event.target === els.dialog) els.dialog.close();
});

renderFilters();
saveFavorites();
renderMeals();
