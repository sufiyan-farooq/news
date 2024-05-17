





async function newsApp(keyword) {
    let  newsCard = document.getElementById('newsCard')

    let apiKey = "a06f2f9a2c0f4e1da36da71f9c6c082a";
    let url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
    
    const newsData = await fetch(url).then(response => response.json());
    console.log(newsData)
    newsCard.innerHTML = '';

    // Create HTML string to append
    let html = '';

    // Start a new row for every three articles
    for (let i = 0; i < newsData.articles.length; i++) {
        if (i % 3 === 0) {
            html += '<div class="row">';
        }

        const article = newsData.articles[i];

        html += `
            <div class="col sm-12 col-md-6 col-lg-4 col-xl-4">
            <div class="card">
            <div class="card__header">
              <img src= "${article.urlToImage}" alt="card__image" class="card__image" width="600">
            </div>
            <div class="card__body">
              <span class="tag tag-blue">${article.publishedAt }</span>
              <h4>${article.title}</h4>
              <p>${article.description}</p>
    
            </div>
            <a href="${article.url}" class="btn btn-primary">Read More</a>
            </div>
            </div>
        `;

   

        // End row after every three articles
        if ((i + 1) % 3 === 0 || (i + 1) === newsData.articles.length) {
            html += '</div>'; // Close the row
        }
    }

    newsCard.innerHTML = html;
}


newsApp("economy")

let elonMusk = document.getElementById('technology');
let sports = document.getElementById('sports');
let politics = document.getElementById('politics');
let bollywood = document.getElementById('bollywood')

technology.addEventListener('click',()=>{
    newsApp("technology")
})

sports.addEventListener('click',()=>{
    newsApp("sports")
})


politics.addEventListener('click',()=>{
    newsApp("politics")
})


bollywood.addEventListener('click',()=>{
    newsApp("bollywood")
})

youtuber.addEventListener('click',()=>{
    newsApp("youtuber")

    
})

cricket.addEventListener('click',()=>{
    newsApp("cricket")
})

pakistan.addEventListener('click',()=>{
    newsApp("pakistan")
})

world.addEventListener('click',()=>{
    newsApp("world")
    })

    celebrity.addEventListener('click',()=>{
        newsApp("celebrity")
    })



