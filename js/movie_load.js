


const MOVIES_URL = "https://localhost:3000/movies"
const MOCK_MOVIES_URL = "./data/movies.json";

const movieObjectList = [];



async function moviePopulate(movieList) {

    const response = await fetch(MOVIES_URL);
    const movies = await response.json();

}

function getMoviesList(){


}