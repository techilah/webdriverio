var webdriverio = require('webdriverio');
var options = { desiredCapabilities: {browserName: 'chrome'}};
var client = webdriverio.remote(options);

client
    .init()
    .url('https://webdriveruniversity.com/')
    .click('#login-portal')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title)
    })
    .end();