beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {

    beforeEach(function() {
        console.log('Inside describe block')    
    });

    it('Should be able to submit a successful submission via contact us form', function(done) {
        browser.setValue('[name=\'first_name\']', 'Joe');
        browser.setValue('[name=\'last_name\']', 'Blogs');
        browser.setValue('[name=\'email\']', 'joe_blogs@mail.com');
        browser.setValue('[name=\'message\']', 'How much does product costs?');
        browser.click('[type=\'submit\']');
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
        browser.setValue('[name=\'first_name\']', 'Joe');
        browser.setValue('[name=\'last_name\']', 'Blogs');
        browser.setValue('[name=\'email\']', 'joe_blogs@mail.com');
        browser.click('[type=\'submit\']');
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
        browser.setValue('[name=\'first_name\']', 'Joe');
        browser.setValue('[name=\'email\']', 'joe_blogs@mail.com');
        browser.click('[type=\'submit\']');
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
        browser.setValue('[name=\'first_name\']', 'Joe');
        browser.setValue('[name=\'last_name\']', 'Blogs');
        browser.click('[type=\'submit\']');
    });
});