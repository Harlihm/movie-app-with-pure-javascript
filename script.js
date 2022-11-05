
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
        const main2=document.getElementById('mainII');



const getMovies = async () => {
    let url = API_URL
const response = await fetch(`https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_networks=213`)
const data = await response.json();

return data;


};


getMovies()
  .then ( 
    data =>
     {
      displayMovies(data.results)
      displayMoviesInfo(data.results)
      function displayMovies(movies) {
        main.innerHTML=''
        movies.forEach((movie) => {
            const {title,poster_path,vote_average,overview}= movie
            const moviesElement = document.createElement('div')
            moviesElement.classList.add('movie')
            moviesElement.innerHTML=`
            
            <img class="mainimg" src="${IMAGE_PATH + poster_path}" alt="${title}">
           
            `
            main.appendChild(moviesElement)
            
        });
       }
       function displayMoviesInfo(movies) {
        main2.innerHTML=''
        movies.forEach((movie) => {
            const {title,poster_path,vote_average,overview}= movie
            const moviesElement = document.createElement('div')
            moviesElement.classList.add('movie')
            moviesElement.innerHTML=`
            
           <div class="originals">
           <h3>${title}</h3>
           <p class="sypnosis">t${overview}</p>
           <span> ${vote_average}</span>
           </div>
         
           
            `
            main2.appendChild(moviesElement)
            
        });
       }

        form.addEventListener('submit' , (e) =>{
            e.preventDefault()
            const searchValue=search.value 
            if(searchValue && searchValue !==''){
                getMovies(SEARCH_URL+searchValue)
                searchValue=''
            } else{
                window.location.reload()
            }
          })

         
    }  
    
  )
  .catch (err => ('rejected', err.message));




