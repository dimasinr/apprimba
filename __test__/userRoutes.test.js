const request = require('supertest');
const app = require('../src/index'); 
// const User = require('../src/models/User'); 

// beforeAll(async () => {
//   await sequelize.sync({ force: true }); 
// });

// beforeEach(async () => {
//   await User.destroy({ where: {} });
//   await User.bulkCreate([
//     { id: '123', name: 'Alice', email: 'alice@gmail.com', age: 25 },
//     { id: '456', name: 'Bob', email: 'bob@gmail.com', age: 30 },
//   ]);
// });

// afterAll(async () => {
//   await sequelize.close(); 
// });

describe('API User', () => {

  let userId;

  it('akan fetching semua user', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('akan membuat user baru', async () => {
    const newUser = {
      name: 'dimas',
      email: 'dimas@gmail.com',
      age: 21,
    };

    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
    expect(response.body.age).toBe(newUser.age);

    userId = response.body.id;
  });

  it('akan fetching satu user berdasarkan id', async () => {
    const response = await request(app).get(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(`${userId}`);
  });

  it('akan update user', async () => {
    const updatedUser = {
      name: 'dims indra',
      email: 'dimas.indra@gmail.com',
      age: 25,
    };

    const response = await request(app).put(`/users/${userId}`).send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedUser.name);
    expect(response.body.email).toBe(updatedUser.email);
    expect(response.body.age).toBe(updatedUser.age);
  });

  it('akan menghapus user', async () => {
    const response = await request(app).delete(`/users/${userId}`);
    expect(response.status).toBe(204);
  });

});
