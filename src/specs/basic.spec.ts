describe( 'SoftwareAdvice home page tests', () => {
    it('should check the page title', function () {
        browser.url('/');
        expect(browser.getTitle() === 'Business Software Reviews from Software Advice®').toBe(true, 'Page title not correct');
    });
})
