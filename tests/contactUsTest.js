browser
    .setViewportSize({
        width: 1600,
        height: 800
    })
    .url('https://webdriveruniversity.com/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title)
    })
    .click('#contact-us')
    .pause(3000);
