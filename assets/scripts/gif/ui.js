'use strict'
const store = require('../store')
const gifTemplate = require('../templates/gif.handlebars')

const displayGifs = function (n) {
  const gifs = store[`gif${n}`]
  console.log(store)
  const htmlGifs = gifTemplate({gifs: gifs})
  $('#display-gif').html('')
  $('#display-gif').append(htmlGifs)
}

module.exports = {
  displayGifs
}
