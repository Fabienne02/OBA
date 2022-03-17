/*** Fetching data -> refactor into module later ***/
const main = document.querySelector('main');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'voedsel';
const key = '166270b1475823ac569dab2a55e8aa3a';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data);
  })
  .catch(err => {
    console.log(err);
  });

  const root = document.getElementById("root")

// render data
function render(data) {
  const results = data.results;
  console.dir(results.length);
  results.forEach((item, i) => {

    const article = document.createElement('article')
      article.setAttribute('class', 'article')

    //   const h2 = document.createElement('h2')
    //   h2.textContent = `${item.titles[0]}`

    //   const p = document.createElement('p')
    //   p.textContent = `${item.summaries ? item.summaries[0] : 'Geen samenvatting'}`

      const img = document.createElement('img')
      img.src = `${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'} `

    //   const textdiv = document.createElement('div')
    //   textdiv.setAttribute('class', 'text')

      const borddiv = document.createElement('div')
      borddiv.setAttribute('class', 'bord')
    //   const bord = document.createAttribute("img")
    //   img.src= "/images/bord.png"

      root.appendChild(article)
    //   article.appendChild(textdiv)
    //   textdiv.appendChild(h2)
    //   textdiv.appendChild(p)
      article.appendChild(borddiv)
      borddiv.appendChild(img)
    

  })

}




// const data =  fetch(url)
// const response =  data.json()
// const quote = response.data

// console.log(response.data)
