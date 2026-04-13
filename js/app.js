const API_KEY = '0e1c531a5def1a0120caab966275c3bc';
const BASE_URL = 'https://api.themoviedb.org/3';
let movies = [];

function getId(id) { return document.getElementById(id); }
const searchIn = getId('searchInput'), searchBtn = getId('searchBtn');
const rating = getId('ratingFilter'), sort = getId('sortSelect');
const grid = getId('moviesGrid'), loading = getId('loadingIndicator');
const error = getId('errorMessage'), noRes = getId('noResults');
const resetBtn = getId('resetBtn'), modeBtn = getId('darkModeBtn');

function show(el) { el.classList.add('show'); }
function hide(el) { el.classList.remove('show'); }

async function fetchMovies(endpoint, params = {}) {
  show(loading); hide(error);
  try {
    const query = new URLSearchParams({ api_key: API_KEY, ...params });
    const res = await fetch(`${BASE_URL}${endpoint}?${query}`);
    if (!res.ok) throw new Error('API Error');
    const data = await res.json();
    hide(loading);
    return data.results || [];
  } catch (err) {
    hide(loading); error.textContent = '❌ Failed to load movies'; show(error);
    return [];
  }
}

async function search(event) {
  if (event) event.preventDefault();
  const text = searchIn.value.trim();
  if (text === '') {
    error.textContent = '⚠️ Enter a movie name'; show(error); return;
  }
  movies = await fetchMovies('/search/movie', { query: text });
  display();
}

function display() {
  let list = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].vote_average >= (parseFloat(rating.value) || 0)) list.push(movies[i]);
  }
  list.sort(function(a, b) {
    if (sort.value === 'popularity') return b.popularity - a.popularity;
    if (sort.value === 'rating') return b.vote_average - a.vote_average;
    let dateA = new Date(a.release_date), dateB = new Date(b.release_date);
    if (sort.value === 'release_date') return dateB - dateA;
    return dateA - dateB;
  });
  
  if (list.length === 0) show(noRes); else hide(noRes);
  let html = '';
  for (let i = 0; i < list.length; i++) {
    let m = list[i];
    let img = m.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${m.poster_path}">` : '<span>🎬</span>';
    let year = m.release_date ? new Date(m.release_date).getFullYear() : 'N/A';
    let score = m.vote_average ? m.vote_average.toFixed(1) : 'N/A';
    html += `<div class="movie-card"><div class="movie-poster">${img}</div><div class="movie-content"><h3 class="movie-title">${m.title}</h3><div class="movie-info"><span>⭐ ${score}</span><span>${year}</span></div><p class="movie-overview">${m.overview || 'No description'}</p><a href="https://www.themoviedb.org/movie/${m.id}" target="_blank" class="movie-link">View →</a></div></div>`;
  }
  grid.innerHTML = html;
}

async function reset() {
  searchIn.value = ''; rating.value = ''; sort.value = 'popularity';
  hide(error); hide(noRes); grid.innerHTML = '';
  movies = await fetchMovies('/movie/popular'); display();
}

searchBtn.addEventListener('click', search);
searchIn.addEventListener('keypress', function(e) { if (e.key === 'Enter') search(e); });
rating.addEventListener('change', display); sort.addEventListener('change', display);
resetBtn.addEventListener('click', reset);
document.addEventListener('DOMContentLoaded', reset);

if (localStorage.getItem('darkMode') === 'true') { document.body.classList.add('dark-mode'); modeBtn.textContent = '☀️'; }
modeBtn.addEventListener('click', function() {
  const isDark = document.body.classList.toggle('dark-mode');
  if (isDark) modeBtn.textContent = '☀️'; else modeBtn.textContent = '🌙';
  localStorage.setItem('darkMode', isDark);
});
