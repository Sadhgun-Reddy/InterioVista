import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './server.js'; // Ensure app is exported

describe('Backend APIs', () => {
  let token;
  let testUser = { username: `testuser_${Date.now()}`, password: 'password123' };

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(testUser);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body.user).toHaveProperty('username', testUser.username);
  });

  it('should login an existing user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send(testUser);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token; // Save token for authenticated requests
  });

  it('should fetch all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a product by id', async () => {
    // Fetch all products first to get a valid ID
    const allProducts = await request(app).get('/api/products');
    const productId = allProducts.body[0].id;

    const res = await request(app).get(`/api/products/${productId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', productId);
  });

  it('should filter products by search query', async () => {
    const res = await request(app).get('/api/products?search=Sofa');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Even if no sofas exist in db, it shouldn't error
  });

  it('should place an order', async () => {
    const allProducts = await request(app).get('/api/products');
    const productId = allProducts.body[0].id;

    const res = await request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({
        totalAmount: 100.0,
        items: [{ productId: productId, quantity: 1, price: 100.0 }]
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('message', 'Order created successfully');
  });

  it('should fetch user orders with order items', async () => {
    const res = await request(app)
      .get('/api/orders')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('items');
    expect(Array.isArray(res.body[0].items)).toBe(true);
  });
});
