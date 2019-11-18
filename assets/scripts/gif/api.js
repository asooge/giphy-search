'use strict'

const getGifs = function (search) {
  return $.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=UW6UfEEO71CGk2AZgexrHeGYiTRAy1GK&limit=6`,
    headers: {
      api_key: 'UW6UfEEO71CGk2AZgexrHeGYiTRAy1GK',
      q: search,
      limit: 6,
      'Access-Control-Allow-Origin': '*',
      'Content-Security-Policy-Report-Only': true
    }
  })
}

module.exports = {
  getGifs
}
