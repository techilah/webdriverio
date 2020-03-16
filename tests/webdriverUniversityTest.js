describe('Verify whether webdriveruniversity link on homepage wok correctly', function(){
    it('Check contact us button opens the contact us page', function(done) {
        return browser
            // .setViewportSize({
            //     width: 1000,
            //     height: 800
            // })
            .url('https://webdriveruniversity.com/')
            .getTitle().then(function(title) {
                console.log('Title is: ' + title)
            })
            .click('#contact-us')
    });
    
    it('check that the login button opens the login portal page', function(done) {
        return browser
            .url('https://webdriveruniversity.com/')
            .click('#login-portal')
            .getTitle().then(function(title) {
                console.log('Title is: ' + title)
            });
    })
})