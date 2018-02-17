const {connectDatabase, disconnectDatabase} = require('../database-utilities');
const {assert} = require('chai');
const request = require('supertest');
const app = require('../../app');

const Video = require('../../models/video');

describe('Server path: /videos', () => {
  describe('POST', () => {
    beforeEach(connectDatabase);
    afterEach(disconnectDatabase);

    it('responds with a 201 status code', async () => {
        const title = 'My Kool Video';
        const description = 'a video to test with';
        const videoUrl = 'https://youtu.be/oLEjOcMYWCY';

      const response = await request(app)
        .post('/videos')
        .type('form')
        .send({title, description, videoUrl})

      assert.equal(response.status, 201);
    })
  });
});
