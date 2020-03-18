beforeEach(function(){
	browser.url("/Accordion/index.html");
})
describe('Verify that the correct text appears on the accordion page', function() {
	it('Verify loading complete text is visible after a set duration of time', function() {
        this.timeout(200000);
        elem = $('#hidden-text');
        console.log('Current text: ' + elem.getText());
        elem.waitForText(2000);

        while(elem.getText() != 'LOADING COMPLETE.') {
            console.log('Current text is still: ' + elem.getText());
            browser.pause(1000);
        }

        console.log(elem.getText());
	});
});