'use strict'
const events = require('./gif/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#search').on('click', events.onGifSearch)
  $('input[type=radio]').on('change', events.setDisplayNum)
})
