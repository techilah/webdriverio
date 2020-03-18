beforeEach(function() {
    browser.url("/Hidden-Elements/index.html");
  })
  
  describe('Test whether hidden elements exist', function() {
    it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
      expect(browser.isExisting('#not-displayed')).to.equal(true);
      expect(browser.isVisible('#not-displayed')).to.equal(false);
    });
  
    it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    //   #visibility-hidden
        expect(browser.isExisting('#visibility-hidden')).to.equal(true);
        expect(browser.isVisible('#visibility-hidden')).to.equal(false);
    });
  
    it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    //   #zero-opacity
        expect(browser.isExisting('#zero-opacity')).to.equal(true);
        expect(browser.isVisible('#zero-opacity')).to.equal(false);
    });
  
    it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    //   h1
        expect(browser.isExisting('h1')).to.equal(true);
        expect(browser.isVisible('h1')).to.equal(true);
    });
    
    it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    //   #no-such-element
        expect(browser.isExisting('#no-such-element')).to.equal(false, 'Element does not exist.');
        expect(browser.isVisible('#no-such-element')).to.equal(false, 'Element does not exist.');

    });
  });