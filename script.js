
const API_KEY = 'a791ad0f144ddfcc6ebe3aa512ef4f43';
// const url = "https://api.themoviedb.org/3/movie/550?api_key=a791ad0f144ddfcc6ebe3aa512ef4f43";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a791ad0f144ddfcc6ebe3aa512ef4f43&page=1";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=a791ad0f144ddfcc6ebe3aa512ef4f43&query="';
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";


const form=document.getElementById('form');
const search=document.getElementById('search');
const main=document.getElementById('main');



const getMovies = async (url) => {
const response = await fetch(url);
if (response.status !== 200){
    throw new Error('cannot fetch the data')
}
const data = await response.json();

return data;


};


getMovies(API_URL)
  .then ( 
    data => {
        console.log(data.results);
        console.log(displayMovies(data.results));
        displayMovies(data.results);

        function displayMovies(movies) {
            
            movies.forEach(
          (movie)=>{
              const {title,poster_path,overview}=movie
           let displayMovies =`
                     <div class="movie-posters">
                          <img class="mainimg" src="${IMAGE_PATH} + ${poster_path}" alt="${title}">
                     </div>
                     <div> 
                          <div class="movie-info">
                          <h3>${title}</h3>
                          <p class="sypnosis">${overview}</p>
                          <span>${rating} xyz </span>
                          </div>
                    </div>            `
             main.innerHTML=displayMovies
          
          }
            )
            } 

        form.addEventListener('submit' , (e) =>{
            e.preventDefault()
            const searchValue=search.value 
            if(searchValue && searchValue !==''){
                getData(SEARCH_URL+searchValue)
                searchValue=''
            } else{
                window.location.reload()
            }
          })

         
    }  
    
  )
  .catch (err => ('rejected', err.message));




