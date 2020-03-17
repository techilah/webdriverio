describe('Test the webdriveruniversity homepage', function() {
    it('Outout the height of the homepage carousel', function(done) {
        browser.url('/');
        browser.pause(2000);
        var divCarouselHeight = browser.getCssProperty('#udemy-promo-video', 'height');
        console.log(divCarouselHeight);
    });
})