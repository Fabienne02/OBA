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
  const book = document.getElementById("book")
  const info = document.getElementById("info")

// render data
function render(data) {
  const results = data.results;
  console.dir(results.length);
  results.forEach((item, i) => {

     const article = document.createElement('article')
      article.setAttribute('class', 'article')

      const img = document.createElement('img')
      img.src = `${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'} `

      book.src = `${item.coverimages[1]}`

      const borddiv = document.createElement('div')
      borddiv.setAttribute('class', 'bord')

    
    img.onclick = function click() {
         console.log(img)
      book.src = img.src

     }

      root.appendChild(article)
      article.appendChild(borddiv)
      borddiv.appendChild(img)
    

  })

  const infotitle = document.createElement("h2")
  const title = results[1].titles[0]
  infotitle.setAttribute('class', 'infoh2')
  infotitle.textContent = title
  info.appendChild(infotitle)

  const infotext = document.createElement("p")
  const text = results[1].summaries[0]
  infotext.setAttribute('class', 'infop')
  infotext.textContent = text
  info.appendChild(infotext)


}



