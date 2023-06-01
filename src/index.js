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
const moviesArr = [];

fetch(baseAPI)
    .then(resp => resp.json())
    .then(movies => {
        updateMovie(movies[0]);
        updateMovieList(movies);
        moviesArr = movies;
    });

buyTicketBtn.addEventListener('click', (event) => {
    if(ticketNum.textContent > 0){
        ticketNum.textContent -= 1;
    }
    else{
        buyTicketBtn.textContent = 'Sold  Out';
    }
});

function updateMovie(movie){
    poster.src = movie.poster;
    movieTitle.textContent = movie.title;
    runtime.textContent = `${movie.runtime} minutes`;
    movieDescription.textContent = movie.description;
    showtime.textContent = movie.showtime;
    ticketNum.textContent = movie.capacity - movie.tickets_sold
    buyTicketBtn.textContent = 'Buy Ticket';
}

function updateMovieList(movies){
    document.getElementById('placeholder').remove();
    movies.forEach(movie => {
        const newMovie = document.createElement('li');
        newMovie.classList.add('film');
        newMovie.textContent = movie.title;
        filmList.append(newMovie);

        newMovie.addEventListener('click', (event) => {
            updateMovie(movie);
        })
    })
}

// I was doing the Bonus Deliveries. I was able to  indicate when a movie was sold out
// yet I wasn't able to add the class name to the list element once the movie
// was sold out.