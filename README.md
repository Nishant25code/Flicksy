# 🎬 Flicksy - Movie Explorer

A beginner-friendly web app to search and explore movies.

## What is This?

Flicksy lets you:
- 🔍 **Search** for movies by name
- ⭐ **Filter** by rating (8.0+, 7.0+, etc.)
- 📊 **Sort** by popularity, rating, or release date
- 👀 **Preview** movies with posters and details

## Project Files Explained

```
Flicksy/
├── index.html          ← The webpage layout
├── css/styles.css      ← Colors & styling
├── js/app.js           ← Interactive features
└── README.md           ← This file!
```

## How to Use

### Open It
1. Download or clone this project
2. Open `index.html` in your web browser
3. Start searching for movies!

### Search Moves
1. Type a movie name (e.g., "Avatar", "The Matrix")
2. Click "Search" or press Enter
3. See movie results with posters and ratings

### Filter & Sort
- Use **"Filter by Rating"** to only show high-rated movies
- Use **"Sort by"** to arrange movies by popularity or release date
- Click **"Reset All"** to start over

## How This Works

### The 3 Main Files

**index.html** - The Structure
- Defines all the buttons, search box, and where movies appear
- Each element has an `id` so JavaScript can find it
- Comments explain what each section does

**css/styles.css** - The Look
- Colors, fonts, spacing, and layout
- Makes it pretty and responsive for phones & computers
- Comments show what each style does

**js/app.js** - The Brain
- Fetches movie data from the TMDB API
- Handles what happens when you click buttons
- Filters, sorts, and displays movies
- **HEAVILY COMMENTED for beginners** - read through it!

## Understanding the Code

Start with **js/app.js** and look for these sections:

1. **STEP 1: API Configuration** - Where the movie data comes from
2. **STEP 2: Store movies data** - The `movies` array
3. **STEP 3: Connect to HTML elements** - Finding buttons & input boxes
4. **STEP 4: Set up buttons** - What happens when you click things
5. **HELPER FUNCTIONS** - Simple functions that do one job
6. **MAIN FUNCTIONS** - The important stuff

Each function has comments explaining what it does!

## Key Concepts for Beginners

### What's an API?
- A way to ask another website for data
- Example: We ask TMDB "Give me movies like Avatar"
- TMDB sends back movie information

### Async & Await
```javascript
async function search() {
    // Wait for movies from API before continuing
    movies = await fetchMovies('/search/movie', { query });
    display();  // Show movies after getting them
}
```

### Event Listeners
```javascript
// When user clicks search button, run search()
searchBtn.addEventListener('click', search);
```

### DOM Manipulation
```javascript
// Change what's on the page with JavaScript
moviesGrid.innerHTML = ''; // Clear old movies
moviesGrid.appendChild(card); // Add new movie card
```

## Try These Modifications!

**Easy:**
- Change colors in `css/styles.css`
- Change the app title in `index.html`
- Add a new rating filter option

**Medium:**
- Add a new sorting method
- Change the movie card layout
- Add more movie details to display

**Hard:**
- Add "favorite movies" feature
- Save search history
- Add different movie genres

## Troubleshooting

**"No movies found"**
- Check your internet connection
- Try a more popular movie name

**Page looks broken**
- Refresh your browser (Ctrl+R or Cmd+R)
- Press Ctrl+Shift+R to clear cache

**JavaScript errors in console**
- Press F12 to open developer tools
- Check the "Console" tab for red error messages

## Learn More

- [TMDB API Docs](https://developer.themoviedb.org/docs)
- [MDN Learn JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [W3Schools HTML/CSS/JS](https://www.w3schools.com)

## What You'll Learn

By studying this code:
- ✅ How APIs work
- ✅ How to use `async/await`
- ✅ How to manipulate HTML with JavaScript
- ✅ How to filter & sort arrays
- ✅ How to build responsive websites
- ✅ How to handle user interactions

## Having Fun Yet?

**Congratulations!** You're learning real web development! This code uses the same concepts professionals use every day.

**Next Steps:**
1. Understand each function in `app.js`
2. Modify the code - break it and fix it!
3. Add your own features
4. Share your version on GitHub!

---

**Happy Learning! 🚀**

## 🛠 Tech Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox and CSS Grid
- **JavaScript (ES6+)** - Modern JavaScript features
- **Fetch API** - For API requests
- **TMDB API** - Movie data source

## 📁 Project Structure

```
Flicksy/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── app.js          # JavaScript logic
├── assets/             # (Future) Images, icons, etc.
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- TMDB API key (free)

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/yourusername/flicksy.git
   cd Flicksy
   ```

2. **Get your TMDB API key**
   - Visit https://www.themoviedb.org/settings/api
   - Create a free account
   - Generate API key

3. **Configure API key**
   - Open `js/app.js`
   - Replace `YOUR_TMDB_API_KEY` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

4. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server (e.g., `python -m http.server` or VS Code Live Server)

## 🎮 How to Use

### Initial Load
- The application automatically loads popular movies when you open it
- Movies are displayed in a responsive grid layout

### Search
1. Enter a movie name in the search box
2. Click "Search" or press Enter
3. Results appear instantly

### Filter by Rating
1. Select a minimum rating from the "Filter by Rating" dropdown
2. Only movies with that rating or higher will be displayed

### Sort Results
- Select a sorting option:
  - **Popularity (Descending)** - Most popular first
  - **Release Date (Newest)** - Most recent films first
  - **Release Date (Oldest)** - Classic films first
  - **Rating (Highest)** - Best rated first

### Reset Filters
- Click the "Reset All" button to:
  - Clear search input
  - Reset all filters
  - Reload popular movies

### View Details
- Click "View Details →" on any movie card to see more information on TMDB

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (below 768px)
- **Small Mobile** (below 480px)

All features work seamlessly across all screen sizes.

## ⚙️ Configuration

### Customization Options

**Change Grid Layout:**
```css
/* In styles.css - modify grid columns */
.movies-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

**Change Color Scheme:**
```css
/* Update gradient colors in styles.css */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Adjust Image Quality:**
```javascript
// In app.js - change image size
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Change w500 to w342 or w780
```

## 🔒 Security Notes

- The API key is exposed in the front-end code. For production, consider:
  - Using a backend proxy
  - Implementing API rate limiting
  - Using environment variables (.env files)
- Input validation is implemented to prevent XSS attacks
- All user input is escaped before rendering

## 🐛 Troubleshooting

### API Key Error
- **Issue:** "API Key not configured" message
- **Solution:** Add your TMDB API key to `js/app.js`

### No Movies Displaying
- **Issue:** Blank grid or loading stuck
- **Solution:** 
  - Check browser console for errors (F12)
  - Verify API key is correct
  - Check internet connection
  - Ensure no CORS issues

### Images Not Loading
- **Issue:** Movie posters show as "🎬" emoji
- **Solution:**
  - Verify TMDB image URL is accessible
  - Check `IMAGE_BASE_URL` configuration

### Search Not Working
- **Issue:** Search returns no results
- **Solution:**
  - Check spelling of movie name
  - Try a more generic search term
  - Check browser console for API errors

## 📚 Learning Resources

- [TMDB API Documentation](https://www.themoviedb.org/settings/api)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

## 🎓 Educational Value

This project is excellent for learning:
- API integration and asynchronous JavaScript (Promises, async/await)
- DOM manipulation and event handling
- Functional programming with array methods
- CSS Grid and Flexbox layouts
- Responsive design principles
- Error handling and user feedback
- Code organization and best practices

## 📄 License

This project is open-source and available for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and enhance this project for your learning purposes!

## 📧 Support

For issues with TMDB API, visit their official documentation.
For questions about the code, review the inline comments and try debugging with browser dev tools.

---

**Happy Movie Exploring! 🍿🎬**
