'use strict'
const api = require('./api.js')
const store = require('../store.js')
const ui = require('./ui.js')

store.displayNum = 10

const onGifSearch = function (event) {
  store.currentPage = 0
  event.preventDefault()
  const search = $('#search-text').val()
  $('#search-text').val('')
  console.log(search)
  api.getGifs(search)
    .then(data => {
      store.gifs = data.data
      return data })
    .then(paginate)
    // .then(ui.displayGifs(0))
}

const switchPage = function (event) {
  event.preventDefault()
  const dataId = event.target.dataset.id
  console.log(dataId)
  if (dataId === 'next') {
    store.currentPage = store.currentPage + 1
  } else if (dataId === 'prior') {
    store.currentPage = store.currentPage - 1
  } else {
    store.currentPage = parseInt(dataId)

  }
  console.log(dataId)
  ui.displayGifs(store.currentPage)
}

const paginate = function (data) {
  store.gifs = data.data
  $('.pagination').html('')
  $('.pagination').append('<a class="shift" data-id="prior" href="#">&laquo;</a>')
  for (let i = 0; i < store.gifs.length; i += store.displayNum) {
    console.log(i)
    store[`gif${i/store.displayNum}`] = store.gifs.slice(i, i+store.displayNum)
    $('.pagination').append(`<a href="" class="page" data-id=${i/store.displayNum}>${i/store.displayNum+1}</a>`)
  }
  $('.pagination').append('<a class="shift" data-id="next" href="#">&raquo;</a>')
  $('.page').on('click', switchPage)
  $('.shift').on('click', switchPage)
  ui.displayGifs(0)
}

const setDisplayNum = function (event) {
  console.log(store)
  store.displayNum = parseInt(event.target.value)
  console.log(event.target.value)
  console.log(store)
  // if (store.gifs) {
  //   paginate(store.gifs)
  // }
}

module.exports = {
  onGifSearch,
  setDisplayNum
}
