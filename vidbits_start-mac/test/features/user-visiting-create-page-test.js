const {assert} = require('chai');

const buildVideoObject = (options = {}) => {
  const title = options.title || 'Test Video';
  const videoUrl = options.videoUrl || 'https://www.youtube.com/embed/6lutNECOZFw';
  const description = options.description || 'A test video';
  return {title, videoUrl, description};
};

describe('User visiting create page', () => {
  describe('posts a new item', () => {
    it('and is rendered', () => {
      const itemToCreate = buildVideoObject();

      browser.url('/videos');
      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#videoUrl-input', itemToCreate.videoUrl);
      browser.click('#submit-button');
      browser.url('/');

      assert.equal(browser.getText('#title-input'), itemToCreate.title);
      assert.equal(browser.getText('#description-input'), itemToCreate.description);
      assert.equal(browser.getText('#videoUrl-input'), itemToCreate.videoUrl);
    });
  });
});
