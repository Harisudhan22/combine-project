const apiBase = "http://localhost:3000/movies";

const moviesList = document.getElementById("moviesList");
const movieForm = document.getElementById("movieForm");
const nameInput = document.getElementById("name");
const descInput = document.getElementById("discription");
const formTitle = document.getElementById("formTitle");
const cancelEditBtn = document.getElementById("cancelEdit");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const refreshBtn = document.getElementById("refreshBtn");

let editingId = null;

async function fetchMovies() {
  try {
    const res = await fetch(apiBase);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch movies failed", err);
    return [];
  }
}

async function getMovieByName(name) {
  try {
    const res = await fetch(`${apiBase}/${encodeURIComponent(name)}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

function renderMovies(items) {
  moviesList.innerHTML = "";
  if (!items || items.length === 0) {
    moviesList.innerHTML = '<p class="muted">No movies found.</p>';
    return;
  }

  items.forEach((m) => {
    const el = document.createElement("div");
    el.className = "movie";
    el.innerHTML = `
      <h3>${escapeHtml(m.name)}</h3>
      <p>${escapeHtml(m.discription || "")}</p>
      <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;

    el.querySelector(".delete").addEventListener("click", () =>
      deleteMovie(m._id),
    );
    el.querySelector(".edit").addEventListener("click", () => startEdit(m));

    moviesList.appendChild(el);
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function loadAndRender() {
  const movies = await fetchMovies();
  renderMovies(movies);
}

async function createMovie(payload) {
  const res = await fetch(apiBase, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function updateMovie(id, payload) {
  const res = await fetch(`${apiBase}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function deleteMovie(id) {
  if (!confirm("Delete this movie?")) return;
  try {
    const res = await fetch(`${apiBase}/${id}`, { method: "DELETE" });
    await res.json();
    await loadAndRender();
  } catch (err) {
    console.error(err);
  }
}

function startEdit(movie) {
  editingId = movie._id;
  nameInput.value = movie.name || "";
  descInput.value = movie.discription || "";
  formTitle.textContent = "Edit movie";
  submitBtn.textContent = "Update";
}

function resetForm() {
  editingId = null;
  movieForm.reset();
  formTitle.textContent = "Add new movie";
  submitBtn.textContent = "Save";
}

movieForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    name: nameInput.value.trim(),
    discription: descInput.value.trim(),
  };
  try {
    if (editingId) {
      await updateMovie(editingId, payload);
    } else {
      await createMovie(payload);
    }
    resetForm();
    await loadAndRender();
  } catch (err) {
    console.error(err);
  }
});

cancelEditBtn.addEventListener("click", () => resetForm());

searchBtn.addEventListener("click", async () => {
  const q = searchInput.value.trim();
  if (!q) return loadAndRender();
  const found = await getMovieByName(q);
  if (found) renderMovies([found]);
  else moviesList.innerHTML = '<p class="muted">No result.</p>';
});

refreshBtn.addEventListener("click", loadAndRender);

const submitBtn = document.getElementById("submitBtn");

document.addEventListener("DOMContentLoaded", () => {
  loadAndRender();
});
