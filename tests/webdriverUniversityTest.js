describe('Verify whether webdriveruniversity link on homepage wok correctly', function(){
    it('Check contact us button opens the contact us page', function(done) {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.click('#contact-us');
    });
    
    it('check that the login button opens the login portal page', function(done) {
        browser.url('/')
        browser.click('#login-portal')
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
    })
})