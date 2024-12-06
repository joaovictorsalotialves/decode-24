import request from 'supertest';
import { app } from './app';
import { prisma } from './prisma';

test('[e2e] CreateLesso', async () => {
  const response = await request(app)
    .post('/lessons')
    .send({ title: 'Nova Aula' });

  const lessonsInDatabase = await prisma.lesson.findFirst({
    where: {
      title: 'Nova Aula'
    }
  })

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
  expect(lessonsInDatabase).toBeTruthy();
})
