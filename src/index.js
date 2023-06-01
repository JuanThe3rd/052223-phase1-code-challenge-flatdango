// Your code here
const baseAPI = 'http://localhost:3000/films';
const filmList = document.getElementById('films');
const poster = document.getElementById('poster');
const movieTitle = document.getElementById('title');
const runtime = document.getElementById('runtime');
const movieDescription = document.getElementById('film-info');
const showtime = document.getElementById('showtime');
const ticketNum = document.getElementById('ticket-num');
const buyTicketBtn = document.getElementById('buy-ticket');

fetch(baseAPI)
    .then(resp => resp.json())
    .then(movies => {
        updateMovie(movies[0])
        updateMovieList(movies);
    });

buyTicketBtn.addEventListener('click', (event) => {
    if(ticketNum.textContent > 0){
        ticketNum.textContent -= 1;
    }
});

function updateMovie(movie){
    poster.src = movie.poster;
    movieTitle.textContent = movie.title;
    runtime.textContent = `${movie.runtime} minutes`;
    movieDescription.textContent = movie.description;
    showtime.textContent = movie.showtime;
    ticketNum.textContent = movie.capacity - movie.tickets_sold
}

function updateMovieList(movies){
    document.getElementById('placeholder').remove();
    movies.forEach(movie => {
        const newMovie = document.createElement('li');
        newMovie.classList.add('film');
        newMovie.textContent = movie.title;
        filmList.append(newMovie);
    })
}