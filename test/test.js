const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');
describe('GET /', () => {
it('should return Hello, Pull request', async () => {
const res = await request(app).get('/');
expect(res.status).to.equal(200);
expect(res.text).to.equal('Hello, Pull request');
});
});