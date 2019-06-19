const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.nytimes.com/')
    .then(({ data }) => {

    })
    .catch(e => console.log(e))