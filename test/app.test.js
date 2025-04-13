const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World! I am learning CICD using GITHUB Action');
}
);

test('GET / should respond with Hello World message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World! I am learning CICD using GITHUB Action');
}
);