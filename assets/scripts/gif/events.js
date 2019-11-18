'use strict'
const api = require('./api.js')
const store = require('../store.js')
const ui = require('./ui.js')

const onGifSearch = function (event) {
  event.preventDefault()
  const search = $('#search-text').val()
  $('#search-text').val('')
  console.log(search)
  api.getGifs(search)
    .then(data => {
      store.gifs = data.data.filter(x => x.embed_url.charAt(4) === 's')
      return data })
    .then(ui.displayGifs)
}

module.exports = {
  onGifSearch
}
