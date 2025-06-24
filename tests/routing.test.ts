import request from 'supertest';
import app from '../src/routing';

describe('GET /health', () => {
    it('should return status ok', async () => {
        const expectedResponse = { status: 'ok' }
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedResponse);
    });
});

describe('GET /:column/histogram', () => {
    it('should return status ok with results', async () => {
        const expectedResponse = {"undefined":2928}
        const response = await request(app).get('/test/histogram');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedResponse);
    });
});
