const API_KEY = '0e1c531a5def1a0120caab966275c3bc';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let movies = [];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const ratingFilter = document.getElementById('ratingFilter');
const sortSelect = document.getElementById('sortSelect');
const resetBtn = document.getElementById('resetBtn');
const moviesGrid = document.getElementById('moviesGrid');
const loading = document.getElementById('loadingIndicator');
const error = document.getElementById('errorMessage');
const noResults = document.getElementById('noResults');

searchBtn.addEventListener('click', search);
searchInput.addEventListener('keypress', e => e.key === 'Enter' && search());
ratingFilter.addEventListener('change', display);
sortSelect.addEventListener('change', display);
resetBtn.addEventListener('click', reset);

function show(el) { el.classList.add('show'); }
function hide(el) { el.classList.remove('show'); }
function setText(el, txt) { el.textContent = txt; }

async function fetchMovies(endpoint, params = {}) {
    show(loading);
    hide(error);
    try {
        const query = new URLSearchParams({ api_key: API_KEY, ...params });
        const res = await fetch(`${BASE_URL}${endpoint}?${query}`);
        if (!res.ok) throw new Error('API Error');
        const data = await res.json();
        hide(loading);
        return data.results || [];
    } catch (err) {
        hide(loading);
        setText(error, '❌ Failed to load movies');
        show(error);
        return [];
    }
}

async function search() {
    const query = searchInput.value.trim();
    if (!query) {
        setText(error, '⚠️ Enter a movie name');
        show(error);
        return;
    }
    movies = await fetchMovies('/search/movie', { query });
    display();
}

function display() {
    let filtered = [...movies];
    const minRating = parseFloat(ratingFilter.value);
    if (minRating) filtered = filtered.filter(m => m.vote_average >= minRating);
    
    const sortBy = sortSelect.value;
    if (sortBy === 'popularity') filtered.sort((a, b) => b.popularity - a.popularity);
    else if (sortBy === 'release_date') filtered.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    else if (sortBy === 'release_date_old') filtered.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    else if (sortBy === 'rating') filtered.sort((a, b) => b.vote_average - a.vote_average);
    
    moviesGrid.innerHTML = '';
    if (filtered.length === 0) {
        show(noResults);
    } else {
        hide(noResults);
        filtered.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            const poster = movie.poster_path ? `${IMG_URL}${movie.poster_path}` : '';
            const img = poster ? `<img src="${poster}" alt="${movie.title}">` : '<span>🎬</span>';
            const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
            const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
            card.innerHTML = `<div class="movie-poster">${img}</div><div class="movie-content"><h3 class="movie-title">${movie.title}</h3><div class="movie-info"><span class="movie-rating">⭐ ${rating}</span><span class="movie-date">${year}</span></div><p class="movie-overview">${movie.overview || 'No description'}</p><a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" class="movie-link">View →</a></div>`;
            moviesGrid.appendChild(card);
        });
    }
}

async function reset() {
    searchInput.value = '';
    ratingFilter.value = '';
    sortSelect.value = 'popularity';
    moviesGrid.innerHTML = '';
    hide(error);
    hide(noResults);
    movies = await fetchMovies('/movie/popular');
    display();
}

document.addEventListener('DOMContentLoaded', reset);
