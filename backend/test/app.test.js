const request = require('supertest');
const app = require('../app');

describe('app', () => {
  it('GETs /api and should obtain { foo: "bar" }', async () => {
    expect.assertions(1);
    const res = await request(app).get('/api').expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "foo": "bar",
      }
    `);
  });
});
