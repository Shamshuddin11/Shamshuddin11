let baseurl = "https://newsapi.org/v2/top-headlines";
let key = '860aad4bf55045628031b859e94ca490';
let news = [];
let url = `${baseurl}?country=in&apiKey=${key}`;
let country = "", category = "";
let cntset = false, catset = false;

getNewsOnload();

function getCountry() {
    country = document.getElementById("country").value;
    cntset = true;
    getNewsOnselect();
}

function getCategory() {
    category = document.getElementById("category").value;
    catset = true;
    getNewsOnselect();
}

function getNewsOnselect() {
    if (cntset == false) {
        url = `${baseurl}?country=in&apiKey=${key}`;
    }
    else  
    {
        url = `${baseurl}?country=${country}&apiKey=${key}`;
    }
    if(cntset == true)
    {
        if(catset == false)
        {
        
            url = `${baseurl}?country=${country}&apiKey=${key}`;
        }
        else  
        {
            url = `${baseurl}?country=${country}&category=${category}&apiKey=${key}`;
        }
    }

    fetch(url).then(response => response.json()).then(
        result => {
            
            news = result['articles'];
            viewNews(news);
        });
}

function getNewsOnload() {

    url = `${baseurl}?country=in&apiKey=${key}`;
    
    fetch(url).then(response => response.json()).then(
        result => {
            news = result['articles'];
            viewNews(news);
        });
}

function viewNews(news) {
    const ele = document.getElementById("news");

    let str = ` <div class="row align-items-start">`;

    news.forEach(element => {
        str += `<div class="col-md-3"> 
                <div class="card" style="width: 18rem;">
                <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">"${element["title"]}"</h5>
                    <p class="card-text">"${element["description"]}"</p>
                <a href="${element["url"]}" class="btn btn-primary">Full Article</a>
                 </div> </div></div>`
    });
    str += `</div>`
    ele.innerHTML = str;
}

 function getNewsOnInput()
 {
     let query = document.getElementById("query").value;
     url = `${baseurl}?q=${query}&country=${country}&apiKey=${key}`;

     fetch(url).then(response => response.json()).then(
        result => {
            
            news = result['articles'];
            viewNews(news);
        });
 }