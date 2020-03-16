browser
    .url('https://webdriveruniversity.com/')
    .click('#login-portal')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title)
    });
