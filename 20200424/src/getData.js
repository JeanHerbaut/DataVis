const cheerio = require('cheerio')
const fs = require('fs')

const page = fs.readFileSync('page.html', 'utf-8')

const $ = cheerio.load(page)

//englobe tout: .row

//div .caption
//nom: 2ème élement h4 
//price: h4 .price

const container = $('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div');


const divs = $('div', container)

divs.each((index, div) => {
    let name = $('div.caption > h4:nth-child(2) > a', div).text()
    let price = $('div.caption > h4.pull-right.price', div).text()
    if (index !== 0 && price.length > 0) {
      console.log({
        nom: name,
        prix: price
      })
    }
  })