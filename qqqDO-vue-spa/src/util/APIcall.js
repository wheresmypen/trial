var $ = require('jquery')

module.exports = {
  // beforeSend: function (xhr, resToken) {
  //   xhr.setRequestHeader(resToken)
  // },
  APIpost: function (url, headings, resToken, data) {
    var addHeadings = headings
    // addHeadings['authorization'] = resToken

    console.log(addHeadings)

    var settings = {
      'async': true,
      'crossDomain': true,
      'url': url, // 'http://52.14.168.26:8081/api/security/login',
      beforeSend: function (req) {
        req.setRequestHeader('Authorization', resToken)
      },
      'method': 'OPTION',
      'headers': addHeadings,
      // 'Access-Control-Request-Headers': '[{"Origin": "http://localhost:3000"}, Accept, {"Content-Type": "application/json"}]',
      //   // 'Content-Type': 'application/json',
      //   // 'Origin': 'http://localhost:3000',
      //   'Access-Control-Request-Method': 'OPTIONS',
      //   'cache-control': 'no-cache',
      //   // 'content-type': 'application/json',
      'data': data
    }
    return $.ajax(settings)
  },

  APItoken: function (url, user, pwd, role) {
    var settings = {
      // beforeSend: function (xhr, resToken) {
      //   xhr.setRequestHeader(resToken)
      // },
      'async': true,
      'crossDomain': true,
      'url': url,
      'method': 'POST',
      'headers': {
      //   'authorization': resToken,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      },
      'data': '{"name" : "' + user + '", "password" : "' + pwd + '", "role" : "' + role + '"}'
    }
    return $.ajax(settings)
  }
}
