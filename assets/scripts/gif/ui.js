'use strict'
const store = require('../store')
const gifTemplate = require('../templates/gif.handlebars')

const displayGifs = function () {
  const gifs = store.gifs
  console.log(gifs)
  const htmlGifs = gifTemplate({gifs: gifs})
  $('#display-gif').html('')
  $('#display-gif').append(htmlGifs)
}

module.exports = {
  displayGifs
}
