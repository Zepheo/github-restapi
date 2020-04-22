const request = require('supertest');
const app = require('../app');

describe('app', () => {
  it('GETs / and should obtain { foo: "bar" }', async () => {
    expect.assertions(1);
    const res = await request(app).get('/').expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "foo": "bar",
      }
    `);
  });
});
