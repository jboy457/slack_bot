/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
const request = require('supertest');
const server = require('../src/app');
const db = require('../src/config/database');
const Response = require('../src/models/response-model');

beforeAll(async () => {
  const responses = [
    {
      name: 'adejareemma',
      response: 'doing_well',
      question: 'Welcome. How are you doing?'
    },
    {
      name: 'adejareemma',
      response: 'neutral',
      question: 'Welcome. How are you doing?'
    },
    {
      name: 'adejareemma',
      response: 'neutral',
      question: 'Welcome. How are you doing?'
    },
    {
      name: 'adejareemma',
      response: 'feeling_lucky',
      question: 'Welcome. How are you doing?'
    }
  ];
  await Response.insertMany(responses);
});

afterAll(async () => {
  try {
    await Response.deleteMany({});
    await db.disconnect();
  } catch (error) {
    throw error;
  }
});

describe('Response Test', () => {
  it('should get all users response', async () => {
    const res = await request(server)
      .get('/responses');

    expect(res.statusCode).toEqual(200);
    expect(res.body.data.length).toEqual(4);
    expect(res.body.status).toEqual('success');
  });
});
