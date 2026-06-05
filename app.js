const meals = [
  {
    id: "IMG_0277",
    date: "2026-03-01",
    title: "牛排烤土豆晚餐",
    tags: ["steak", "date-night", "vegetables", "western"],
    dishes: [
      { name: "肋眼牛排", type: "steak", group: "protein" },
      { name: "烤小土豆", type: "potato", group: "staple" },
      { name: "炒蘑菇", type: "mushroom", group: "side" },
      { name: "西兰花", type: "vegetable", group: "side" },
      { name: "小番茄沙拉", type: "salad", group: "side" }
    ]
  },
  {
    id: "IMG_0345",
    date: "2026-03-07",
    title: "饺子清蒸鱼排骨",
    tags: ["dumplings", "seafood", "ribs", "chinese"],
    dishes: [
      { name: "水饺", type: "dumpling", group: "main" },
      { name: "清蒸整鱼", type: "fish", group: "protein" },
      { name: "红烧排骨", type: "ribs", group: "protein" },
      { name: "蒜蓉白菜", type: "vegetable", group: "side" }
    ]
  },
  {
    id: "IMG_0445",
    date: "2026-03-16",
    title: "奶油海鲜意面",
    tags: ["pasta", "seafood", "vegetables", "western"],
    dishes: [
      { name: "奶油番茄三文鱼宽面", type: "pasta", group: "main" },
      { name: "芦笋西葫芦", type: "vegetable", group: "side" }
    ]
  },
  {
    id: "IMG_0597",
    date: "2026-03-27",
    title: "鱼、龙虾炒饭和青菜",
    tags: ["seafood", "rice", "chicken", "chinese"],
    dishes: [
      { name: "龙虾炒饭", type: "seafood-rice", group: "main" },
      { name: "清蒸鱼", type: "fish", group: "protein" },
      { name: "豉油鸡", type: "chicken", group: "protein" },
      { name: "杏鲍菇", type: "mushroom", group: "side" },
      { name: "蒜蓉青菜", type: "vegetable", group: "side" }
    ]
  },
  {
    id: "IMG_0674",
    date: "2026-04-05",
    title: "烧鸭麻婆豆腐",
    tags: ["rice", "tofu", "duck", "chinese"],
    dishes: [
      { name: "烧鸭", type: "chicken", group: "protein" },
      { name: "麻婆豆腐", type: "tofu", group: "main" },
      { name: "蒜蓉生菜", type: "vegetable", group: "side" },
      { name: "白米饭", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1027",
    date: "2026-05-03",
    title: "牛肉炒面和草莓沙拉",
    tags: ["noodles", "beef", "salad", "soup"],
    dishes: [
      { name: "彩椒牛肉炒面", type: "noodle", group: "main" },
      { name: "奶油汤", type: "soup", group: "side" },
      { name: "草莓蔬菜沙拉", type: "salad", group: "side" }
    ]
  },
  {
    id: "IMG_1053",
    date: "2026-05-08",
    title: "开心果莓果蛋糕",
    tags: ["dessert", "cake", "berries"],
    dishes: [
      { name: "开心果莓果奶油蛋糕", type: "cake", group: "dessert" }
    ]
  },
  {
    id: "IMG_1092",
    date: "2026-05-12",
    title: "排骨米饭番茄豆腐",
    tags: ["ribs", "rice", "tofu", "chinese"],
    dishes: [
      { name: "烤排骨", type: "ribs", group: "protein" },
      { name: "番茄豆腐", type: "tofu", group: "side" },
      { name: "蒜蓉白菜", type: "vegetable", group: "side" },
      { name: "白米饭", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1148",
    date: "2026-05-21",
    title: "番茄牛肉炖菜",
    tags: ["stew", "rice", "tofu", "vegetables"],
    dishes: [
      { name: "番茄牛肉炖菜", type: "stew", group: "main" },
      { name: "蘑菇鸡肉", type: "mushroom", group: "protein" },
      { name: "蒜蓉菠菜", type: "vegetable", group: "side" },
      { name: "葱油嫩豆腐", type: "tofu", group: "side" },
      { name: "白米饭", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1182",
    date: "2026-05-24",
    title: "蛤蜊豆腐汤和红烧排骨",
    tags: ["seafood", "ribs", "rice", "chinese"],
    dishes: [
      { name: "蛤蜊豆腐汤", type: "soup", group: "main" },
      { name: "红烧排骨", type: "ribs", group: "protein" },
      { name: "肉末酱", type: "stew", group: "side" },
      { name: "炒空心菜", type: "vegetable", group: "side" },
      { name: "白米饭", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1193",
    date: "2026-05-26",
    title: "番茄牛肉炖菜和炸茄夹",
    tags: ["stew", "eggplant", "rice", "vegetables"],
    dishes: [
      { name: "番茄牛肉炖菜", type: "stew", group: "main" },
      { name: "炸茄夹", type: "eggplant", group: "main" },
      { name: "炒青椒", type: "vegetable", group: "side" },
      { name: "西兰花青菜", type: "vegetable", group: "side" },
      { name: "白米饭", type: "rice", group: "side" }
    ]
  },
  {
    id: "IMG_1251",
    date: "2026-06-03",
    title: "炸酱手擀面",
    tags: ["noodles", "pork", "salad", "chinese"],
    dishes: [
      { name: "炸酱手擀面", type: "noodle", group: "main" },
      { name: "黄瓜丝", type: "vegetable", group: "side" },
      { name: "生菜沙拉", type: "salad", group: "side" }
    ]
  }
];

const filtersByMode = {
  meals: [
    { id: "all", label: "全部" },
    { id: "chinese", label: "中餐" },
    { id: "seafood", label: "海鲜" },
    { id: "noodles", label: "面食" },
    { id: "rice", label: "米饭" },
    { id: "vegetables", label: "蔬菜多" },
    { id: "dessert", label: "甜品" }
  ],
  dishes: [
    { id: "all", label: "全部" },
    { id: "main", label: "主菜" },
    { id: "vegetable", label: "蔬菜" },
    { id: "staple", label: "主食" },
    { id: "soup", label: "汤品" },
    { id: "side", label: "小菜" },
    { id: "dessert", label: "甜品" }
  ]
};

const allDishes = meals.flatMap((meal) =>
  meal.dishes.map((dish, index) => ({
    ...dish,
    id: `${meal.id}-${index}`,
    mealId: meal.id,
    mealTitle: meal.title,
    date: meal.date,
    tags: meal.tags
  }))
);

const preferredMenuImages = {
  "白米饭": "IMG_1182-4"
};

const menuDishes = buildMenuDishes(allDishes);

const state = {
  mode: location.hash === "#meals" ? "meals" : "dishes",
  activeFilter: "all",
  query: ""
};

const els = {
  grid: document.getElementById("itemGrid"),
  modeButtons: document.querySelectorAll("[data-mode]"),
  filters: document.getElementById("filters"),
  search: document.getElementById("searchInput"),
  mealCount: document.getElementById("mealCount"),
  dishCount: document.getElementById("dishCount"),
  emptyState: document.getElementById("emptyState"),
  dialog: document.getElementById("mealDialog"),
  dialogBody: document.getElementById("dialogBody"),
  dialogClose: document.getElementById("dialogClose")
};

function photoPath(id, size = "thumbs") {
  return `assets/${size}/${id}.jpg`;
}

function dishPath(id) {
  return `assets/dishes-polished/${id}.jpg`;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric" }).format(new Date(`${dateString}T12:00:00`));
}

function mealText(meal) {
  return [
    meal.title,
    meal.date,
    formatDate(meal.date),
    ...meal.tags,
    ...meal.tags.map(labelFor),
    ...meal.dishes.flatMap((dish) => [dish.name, dish.type, dish.group])
  ].join(" ").toLowerCase();
}

function dishText(dish) {
  return [
    dish.name,
    dish.type,
    dish.group,
    dish.mealTitle,
    dish.date,
    formatDate(dish.date),
    labelFor(menuSectionFor(dish)),
    labelFor(dish.type),
    labelFor(dish.group),
    ...dish.tags,
    ...dish.tags.map(labelFor),
    ...dish.appearances.flatMap((appearance) => [appearance.mealTitle, appearance.date, formatDate(appearance.date)])
  ].join(" ").toLowerCase();
}

function getVisibleMeals() {
  return meals.filter((meal) => {
    const matchesFilter =
      state.activeFilter === "all" ||
      meal.tags.includes(state.activeFilter);

    return matchesFilter && (!state.query || mealText(meal).includes(state.query));
  });
}

function getVisibleDishes() {
  return menuDishes.filter((dish) => {
    const section = menuSectionFor(dish);
    const matchesFilter =
      state.activeFilter === "all" ||
      section === state.activeFilter ||
      dish.type === state.activeFilter ||
      dish.tags.includes(state.activeFilter);

    return matchesFilter && (!state.query || dishText(dish).includes(state.query));
  });
}

function renderStats(items) {
  if (state.mode === "meals") {
    els.mealCount.textContent = items.length;
    els.dishCount.textContent = items.reduce((total, meal) => total + meal.dishes.length, 0);
  } else {
    els.mealCount.textContent = new Set(items.flatMap((dish) => dish.appearances.map((appearance) => appearance.mealId))).size;
    els.dishCount.textContent = items.length;
  }
}

function renderModeButtons() {
  els.modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === state.mode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  els.search.placeholder = state.mode === "meals" ? "搜索晚餐、菜名、标签" : "搜索菜名、分类、日期";
}

function renderFilters() {
  els.filters.innerHTML = filtersByMode[state.mode].map((filter) => `
    <button
      class="filter-button ${state.activeFilter === filter.id ? "is-active" : ""}"
      type="button"
      role="tab"
      aria-selected="${state.activeFilter === filter.id}"
      data-filter="${filter.id}"
    >${filter.label}</button>
  `).join("");
}

function setMode(mode) {
  if (state.mode === mode) return;
  state.mode = mode;
  state.activeFilter = "all";
  state.query = "";
  els.search.value = "";
  history.replaceState(null, "", mode === "meals" ? "#meals" : "#dishes");
  render();
}

function setFilter(id) {
  state.activeFilter = id;
  render();
}

function render() {
  renderModeButtons();
  renderFilters();

  if (state.mode === "meals") {
    const visibleMeals = getVisibleMeals();
    renderStats(visibleMeals);
    renderMealCards(visibleMeals);
    return;
  }

  const visibleDishes = getVisibleDishes();
  renderStats(visibleDishes);
  renderMenu(visibleDishes);
}

function renderMealCards(visibleMeals) {
  els.grid.className = "item-grid";
  els.emptyState.hidden = visibleMeals.length > 0;
  els.grid.innerHTML = visibleMeals.map((meal) => {
    const chips = meal.dishes.slice(0, 4).map((dish) => `<span class="dish-chip">${escapeHtml(dish.name)}</span>`).join("");
    const more = meal.dishes.length > 4 ? `<span class="dish-chip">另 ${meal.dishes.length - 4} 道</span>` : "";
    const tags = meal.tags.slice(0, 3).map((tag) => `<span class="tag">${escapeHtml(labelFor(tag))}</span>`).join("");

    return `
      <article class="archive-card meal-card" data-id="${meal.id}">
        <img src="${photoPath(meal.id)}" alt="${escapeHtml(meal.title)}">
        <div class="card-body">
          <div class="card-kicker">
            <span>${formatDate(meal.date)}</span>
            <span>${meal.dishes.length} 道菜</span>
          </div>
          <h2>${escapeHtml(meal.title)}</h2>
          <div class="dish-chips">${chips}${more}</div>
          <div class="card-footer">
            <div class="tag-row">${tags}</div>
            <button class="card-action" type="button" data-open-meal="${meal.id}">查看</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderMenu(visibleDishes) {
  els.grid.className = "item-grid menu-grid";
  els.emptyState.hidden = visibleDishes.length > 0;
  const sections = [
    { id: "main", title: "主菜", note: "肉类、海鲜、豆腐和炖菜，适合作为一餐的核心。" },
    { id: "vegetable", title: "蔬菜", note: "青菜、菌菇、沙拉和清爽配菜。" },
    { id: "staple", title: "主食", note: "米饭、土豆、面、炒饭、意面和饺子。" },
    { id: "soup", title: "汤品", note: "适合搭配正餐的汤。" },
    { id: "side", title: "小菜", note: "豆腐、酱料和可以搭配主食的小盘。" },
    { id: "dessert", title: "甜品", note: "饭后的甜味收尾。" }
  ];

  const visibleSections = sections.map((section) => ({
    ...section,
    dishes: visibleDishes.filter((dish) => menuSectionFor(dish) === section.id)
  })).filter((section) => section.dishes.length);

  const indexHtml = visibleSections.map((section) => `
    <a class="menu-index-link" href="#menu-section-${section.id}">
      <span>${escapeHtml(section.title)}</span>
      <strong>${section.dishes.length}</strong>
    </a>
  `).join("");

  const sectionHtml = visibleSections.map((section) => {
    const rows = section.dishes.map((dish) => {
      const memoryText = dish.appearances.length > 1
        ? `做过 ${dish.appearances.length} 次 · 最近 ${formatDate(dish.date)}`
        : `${formatDate(dish.date)} · ${dish.mealTitle}`;

      return `
        <article class="menu-item" data-id="${dish.id}" data-open-dish="${dish.id}" role="button" tabindex="0" aria-label="查看${escapeHtml(dish.name)}">
          <span class="menu-thumb" aria-hidden="true">
            <img src="${dishPath(dish.imageId)}" alt="${escapeHtml(dish.name)}">
          </span>
          <div class="menu-copy">
            <h3>
              <span class="menu-name">${escapeHtml(dish.name)}</span>
              <span class="menu-cue" aria-hidden="true">›</span>
            </h3>
            <p class="menu-detail">
              <span>${escapeHtml(labelFor(dish.type))}</span>
              <span>${escapeHtml(memoryText)}</span>
            </p>
          </div>
        </article>
      `;
    }).join("");

    return `
      <section class="menu-section" id="menu-section-${section.id}" aria-label="${escapeHtml(section.title)}">
        <div class="menu-section-head">
          <div>
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.note)}</p>
          </div>
          <span>${section.dishes.length} 道</span>
        </div>
        <div class="menu-items">${rows}</div>
      </section>
    `;
  }).join("");

  els.grid.innerHTML = `
    <div class="menu-board">
      <aside class="menu-aside" aria-label="菜单概览">
        <p class="eyebrow">鹿梅小馆</p>
        <h2>主厨菜单</h2>
        <p>从我们一起做过的饭里整理出的菜品。</p>
        <nav class="menu-index" aria-label="菜单分类">
          ${indexHtml}
        </nav>
      </aside>
      <div class="menu-sections">
        ${sectionHtml}
      </div>
    </div>
  `;
}

function openMeal(id) {
  const meal = meals.find((item) => item.id === id);
  if (!meal) return;

  const dishItems = meal.dishes.map((dish) => `
    <li>
      <div>
        <strong>${escapeHtml(dish.name)}</strong>
        <span>${escapeHtml(labelFor(dish.group))}</span>
      </div>
      <span class="stat-chip">${escapeHtml(labelFor(dish.type))}</span>
    </li>
  `).join("");

  els.dialogBody.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-photo">
        <img src="${photoPath(meal.id, "photos")}" alt="${escapeHtml(meal.title)}">
      </div>
      <div class="dialog-content">
        <div>
          <p class="eyebrow">${formatDate(meal.date)}</p>
          <h2>${escapeHtml(meal.title)}</h2>
        </div>
        <div class="dialog-meta">
          <span class="stat-chip">${meal.dishes.length} 道菜</span>
          ${meal.tags.map((tag) => `<span class="stat-chip">${escapeHtml(labelFor(tag))}</span>`).join("")}
        </div>
        <ul class="dish-list">${dishItems}</ul>
      </div>
    </div>
  `;
  showDialog();
}

function openDish(id) {
  const dish = menuDishes.find((item) => item.id === id);
  if (!dish) return;

  const appearances = dish.appearances.map((appearance) => `
    <li>
      <div>
        <strong>${escapeHtml(appearance.mealTitle)}</strong>
        <span>${formatDate(appearance.date)}</span>
      </div>
      <button class="dialog-action" type="button" data-open-meal="${appearance.mealId}">整桌</button>
    </li>
  `).join("");

  els.dialogBody.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-photo">
        <img src="${dishPath(dish.imageId)}" alt="${escapeHtml(dish.name)}">
      </div>
      <div class="dialog-content">
        <div>
          <p class="eyebrow">${dish.appearances.length} 次记录 · ${escapeHtml(labelFor(menuSectionFor(dish)))}</p>
          <h2>${escapeHtml(dish.name)}</h2>
        </div>
        <div class="dialog-meta">
          <span class="stat-chip">${escapeHtml(labelFor(dish.type))}</span>
          <span class="stat-chip">${escapeHtml(dish.mealTitle)}</span>
        </div>
        <p class="dish-summary">这是从原始晚餐照片里截出的单菜图。打开整桌可以看到当时一起做的其他菜。</p>
        <ul class="dish-list">${appearances}</ul>
      </div>
    </div>
  `;
  showDialog();
}

function showDialog() {
  if (!els.dialog.open) {
    els.dialog.showModal();
  }
}

function menuSectionFor(dish) {
  if (dish.group === "dessert" || dish.type === "cake") return "dessert";
  if (dish.type === "soup") return "soup";
  if (["rice", "seafood-rice", "noodle", "pasta", "dumpling", "potato"].includes(dish.type)) return "staple";
  if (dish.group === "protein" || dish.group === "main") return "main";
  if (dish.type === "tofu" || (dish.group === "side" && dish.type === "stew")) return "side";
  if (["vegetable", "salad", "mushroom"].includes(dish.type)) return "vegetable";
  if (["steak", "fish", "ribs", "chicken"].includes(dish.type)) return "main";
  return "side";
}

function labelFor(value) {
  const labels = {
    all: "全部",
    main: "主菜",
    protein: "肉类/海鲜",
    vegetable: "蔬菜",
    staple: "主食",
    soup: "汤品",
    tofu: "豆腐",
    side: "小菜",
    dessert: "甜品",
    steak: "牛排",
    potato: "土豆",
    mushroom: "菌菇",
    salad: "沙拉",
    dumplings: "饺子",
    dumpling: "饺子",
    fish: "鱼",
    ribs: "排骨",
    pasta: "意面",
    "seafood-rice": "海鲜饭",
    chicken: "鸡肉",
    eggplant: "茄夹",
    rice: "米饭",
    noodle: "面食",
    cake: "蛋糕",
    stew: "炖菜",
    chinese: "中餐",
    seafood: "海鲜",
    noodles: "面食",
    vegetables: "蔬菜",
    "date-night": "约会晚餐",
    western: "西式",
    beef: "牛肉",
    berries: "莓果",
    duck: "鸭肉",
    pork: "猪肉"
  };

  return labels[value] || String(value).replaceAll("-", " ");
}

function buildMenuDishes(dishes) {
  const byDish = new Map();

  dishes.forEach((dish) => {
    const key = normalizeDishKey(dish.name);
    if (!byDish.has(key)) {
      byDish.set(key, {
        ...dish,
        id: key,
        imageId: dish.id,
        appearances: [dish],
        tags: [...dish.tags]
      });
      return;
    }

    const existing = byDish.get(key);
    existing.appearances.push(dish);
    existing.tags = [...new Set([...existing.tags, ...dish.tags])];
    existing.mealTitle = `${existing.appearances.length} 顿晚餐`;
    if (new Date(dish.date) > new Date(existing.date)) {
      existing.date = dish.date;
    }
  });

  return [...byDish.values()].map((dish) => ({
    ...dish,
    imageId: preferredMenuImages[dish.id] || dish.imageId
  }));
}

function normalizeDishKey(name) {
  const key = String(name).toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, "").trim();
  const aliases = {
    "清蒸整鱼": "清蒸鱼",
    "steamedwholefish": "清蒸鱼",
    "steamedfish": "清蒸鱼",
    "tomatobeefstew": "番茄牛肉炖菜",
    "whiterice": "白米饭",
    "garlicnapacabbage": "蒜蓉白菜",
    "braisedporkribs": "红烧排骨"
  };
  return aliases[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

els.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setFilter(button.dataset.filter);
});

els.grid.addEventListener("keydown", (event) => {
  const item = event.target.closest(".menu-item[data-open-dish]");
  if (!item || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  openDish(item.dataset.openDish);
});

els.search.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

document.addEventListener("click", (event) => {
  const mealButton = event.target.closest("[data-open-meal]");
  if (mealButton) {
    openMeal(mealButton.dataset.openMeal);
    return;
  }

  const dishButton = event.target.closest("[data-open-dish]");
  if (dishButton) {
    openDish(dishButton.dataset.openDish);
    return;
  }

});

els.dialogClose.addEventListener("click", () => els.dialog.close());
els.dialog.addEventListener("click", (event) => {
  if (event.target === els.dialog) els.dialog.close();
});

window.addEventListener("hashchange", () => {
  const nextMode = location.hash === "#meals" ? "meals" : "dishes";
  if (state.mode !== nextMode) setMode(nextMode);
});

render();
