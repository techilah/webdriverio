describe('Verify whether webdriveruniversity link on homepage wok correctly', function(){
    it('Check contact us button opens the contact us page', function(done) {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.click('#contact-us');
        var tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[0]);
        browser.pause(2000);
        browser.switchTab(tabIds[1]);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Contact Us');

        var url = browser.getUrl();
        expect(url).to.include('Contact-Us')
        browser.close();
    });
    
    it('check that the login button opens the login portal page', function(done) {
        browser.url('/')
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.click('#login-portal');
        var tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[1]);
        var title2 = browser.getTitle();
        title2.should.equal('WebDriver | Login Portal');
        console.log('Title is: ' + title);
        browser.close();
    })
})