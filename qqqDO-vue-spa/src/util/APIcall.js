var $ = require('jquery')

function executeHttp (verb, url, resToken, data) {
  var settings = {
    'async': true,
    'crossDomain': true,
    'url': url,
    beforeSend: function (req) {
      req.setRequestHeader('Authorization', resToken)
      req.setRequestHeader('Content-Type', 'application/json')
    },
    'method': verb,
    'data': JSON.stringify(data)
  }
  return $.ajax(settings)
}

module.exports = {
  APIpost: function (url, resToken, data) {
    return executeHttp('POST', url, resToken, data)
  },

  APIget: function (url, resToken, data) {
    return executeHttp('GET', url, resToken, data)
  },

  APIput: function (url, resToken, data) {
    return executeHttp('PUT', url, resToken, data)
  },

  APIdelete: function (url, resToken, data) {
    return executeHttp('DELETE', url, resToken, data)
  },

  APItoken: function (url, user, pwd, role) {
    var settings = {
      'async': true,
      'crossDomain': true,
      'url': url,
      'method': 'POST',
      beforeSend: function (req) {
        req.setRequestHeader('Content-Type', 'application/json')
      },
      'data': '{"name" : "' + user + '", "password" : "' + pwd + '", "role" : "' + role + '"}'
    }
    return $.ajax(settings)
  }
}
