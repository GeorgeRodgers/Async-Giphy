require('dotenv').config();

// Print out value of API key stored in .env file

async function getImages(query){
    let input = query;
    let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${input}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    let response = await fetch(endpoint)
    let json = await response.json()

        // solution for first stretch question
    // let random = Math.floor(Math.random() * json.data.length)
    // let urlrandom = json.data[random].url;
    // return urlrandom;

    let urls = [];

    json.data.forEach((item) => {
        urls.push(item.url);
      });
    return urls
}

async function helpGetImages(query){
    let x = await getImages(query);
    return x
}

let x = helpGetImages(`dogs`)

console.log(x)