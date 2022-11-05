
const API_KEY = 'a791ad0f144ddfcc6ebe3aa512ef4f43';
// const url = "https://api.themoviedb.org/3/movie/550?api_key=a791ad0f144ddfcc6ebe3aa512ef4f43";
const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated: `https://api.themoviedb.org/3//movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a791ad0f144ddfcc6ebe3aa512ef4f43&page=1";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=a791ad0f144ddfcc6ebe3aa512ef4f43&query="';
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";


        const form=document.getElementById('form');
        const search=document.getElementById('search');
        const main=document.getElementById('main');
        const main2=document.getElementById('main2');
        const head=document.querySelector('.banner');


      

const getMovies = async () => {
    let url = API_URL
const response = await fetch(url)
const data = await response.json();

return data;


};


getMovies(API_URL)
  .then ( 
    data =>
     {
      
      
      displayMovies(data.results)
      
    
      function displayMovies(movies) {
        main.innerHTML=''
        movies.forEach((movie) => {
            const {title,poster_path,vote_average,overview}= movie
            const moviesElement = document.createElement('div')
            moviesElement.setAttribute('id', 'movie');

            moviesElement.innerHTML=`
            
            <img class="mainimg" src="${IMAGE_PATH + poster_path}" alt="${title}">
            <div class="originals">
            <h3>${title}</h3>
            <p class="sypnosis">${overview}</p>
            <span>RATING ${vote_average}</span>
            </div>
          
           
            `
            main.appendChild(moviesElement)
        
            var showDetails=document.querySelectorAll('#movie');
           
          for (var i = 0; i < showDetails.length; i++) {
           
            showDetails[i].onclick = function () {
            console.log('clicked')
            if(this.children[1].classList.contains("hide")){
              this.children[1].classList.remove("hide");
              this.children[1].classList.add("show");
             
              
            } else{
                // document.querySelectorAll('.originals').forEach((detail) => detail.style.display="none");
                this.children[1].classList.remove("show");
              this.children[1].classList.add("hide");
        
        }
      }; 
        

        
    };

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


const getTrendng = async (url) => {
const response = await fetch(url)
const data = await response.json();

return data;


};


getTrendng(requests.fetchTrending)
  .then ( 
    data =>
     {
      
      displayMovies(data.results)
      function displayMovies(movies) {
        main2.innerHTML=''
        movies.forEach((movie) => {
            const {title,poster_path,vote_average,overview}= movie
            const moviesElement = document.createElement('div')
            moviesElement.setAttribute('id', 'movie');
            moviesElement.innerHTML=`
            
            
            <img class="mainimg" src="${IMAGE_PATH + poster_path}" alt="${title}">
            
            <div class="originals">
            <h3>${title}</h3>
            <p class="sypnosis">${overview}</p>
            <span>RATING ${vote_average}</span>
            </div>
          
           
            `

            main2.appendChild(moviesElement)  
                        var showDetails=document.querySelectorAll('#movie');
             for (var i = 0; i < showDetails.length; i++) {
              
               showDetails[i].onclick = function () {
               console.log('clicked')
               if(this.children[1].classList.contains("hide")){
                this.children[1].classList.remove("hide");
                this.children[1].classList.add("show");
               
                
              } else{
                  // document.querySelectorAll('.originals').forEach((detail) => detail.style.display="none");
                  this.children[1].classList.remove("show");
                this.children[1].classList.add("hide");
          
           }
         }; 
           
   
           
       };


        });
       }
      
         
       }  
    
  )
  .catch (err => ('rejected', err.message));
  

  


  const getBanner = async (url) => {
    var response = await fetch(url)
    const data = await response.json();
     return data;
    
    
    };

    getBanner(requests.fetchActionMovies)
    .then(
      data=> {
  
        const randomNumber = Math.floor(Math.random() * data.results.length -1)
        console.log(randomNumber)
    
        
        head.style.backgroundImage = `url('${IMAGE_PATH + data.results[randomNumber].poster_path}')`
 
       

      

      }
    );

