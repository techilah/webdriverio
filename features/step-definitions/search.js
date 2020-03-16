const { Given, Then, When } = require('cucumber');
const assert = require('assert')

Given('I open {string} url', function (string) {
    // Write code here that turns the phrase above into concrete actions
    browser.url("http://" + string)
});

Then('The page {string} is loaded', function (string) {
    // Write code here that turns the phrase above into concrete actions
   assert.equal(new URL(browser.getUrl()).host, "www.google.com", "Expected is different than actual " + new URL(browser.getUrl()).host)
});

