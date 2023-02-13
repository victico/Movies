// import '../css/style.css';
function liked(elemento){
    elemento.classList.toggle('liked');
    
}

const b = async (section, id) =>{
    let hmtl='';
    try{
        const $query = await fetch(`https://api.themoviedb.org/3/movie/${section}?api_key=cf0541fda36ea561f2c387d836aca5b6&language=es-MX&include_image_language=es,null`);
        console.log($query)
        
        const movies = await $query.json();
        console.log(movies)
        movies.results.map((item, index)=>{
            hmtl+=`
                <a class="post">
                    <div class="content__interaction" >
                        <div class="content__interaction--like" onclick="liked(this)">
                        </div>                        
                    </div>
                    <figure class="post__image">
                        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="">
                    </figure>
                    <div class="content__text">
                        <h4>${item.title}</h4>
                        <h5>
                            ${item.overview.substr(0, 200).trim()}... 
                        </h5>
                    </div>
                </a>
            
            `
        })
    }
    catch(error){
        console.log(error)
    }
   
    
    const elemento = document.getElementById(id).innerHTML += hmtl
}

b('now_playing','nowPlaying')
b('top_rated','topCritic')
b('upcoming','noLose')