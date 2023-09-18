// List of movies
const movies = [
    "Wonder Woman",
    "Spider Man",
    "Dunkirk",
    "Dunkirk",
    "Mad Max",
    "The Jungle Book",
    "The Fate of the Furious",
    "Fury",
    "Life of Pi",
    "Heyna"
];

const mainContent = document.getElementById('main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

// Function to toggle sidebar visibility
function toggleSidebar() {
    sidebar.classList.toggle('visible');
}

// Adding click event listener to the toggle button
sidebarToggle.addEventListener('click', function (event) {
    event.preventDefault();
    toggleSidebar();
});

// To Create my movie cards
movies.forEach((movie, index) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.textContent = `${index + 1}. ${movie}`;
    mainContent.appendChild(movieCard);
});
