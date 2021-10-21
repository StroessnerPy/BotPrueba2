const axios = require('axios')
const cheerio = require('cheerio')

const cnn = async() => {
const res = await axios.get(`https://cnnespanol.cnn.com/seccion/mundo/`)
const $ = cheerio.load(res.data)
const hasil = []
$('article').each(function(a, b) {
const link = $(b).find('a').attr('href')
const thumb = $(b).find('img').attr('src') 
const judul = $(b).find('img').attr('alt')
hasil.push({ judul, link, thumb })
}) 
return hasil
}

module.exports = { cnn }
