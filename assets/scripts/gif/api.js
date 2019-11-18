'use strict'

const getGifs = function (search) {
  return $.ajax({
    url: `//api.giphy.com/v1/gifs/search?q=${search}&api_key=UW6UfEEO71CGk2AZgexrHeGYiTRAy1GK&limit=6`,
    xhrFields: {
      withCredentials: false
    },
    crossDomain: true,
    headers: {
      // 'Access-Control-Request-Headers': 'http://localhost:7165',
      // 'Content-Security-Policy-Report-Only': true
    }
  })
}

module.exports = {
  getGifs
}
