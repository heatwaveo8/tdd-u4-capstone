const {assert} = require('chai');

describe('User visiting landing page', () => {
  describe('with no existing videos', () => {
    it('shows no videos', () => {
      browser.url('/');

      assert.equal(browser.getText('#videos-container'), '');
    });
  });

  describe('and goes', () => {
    it('to create page', () => {
      browser.url('/');

      browser.click('a[href="/videos/create.html"]');

      assert.equal(browser.getText('.form-title'), 'Save a video');
    });
  });
});
