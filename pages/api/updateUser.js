import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function updateUser(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const userData = JSON.parse(req.body);

  const upsertUser = await prisma.user.upsert({
    where: {
      email: userData.email,
    },
    update: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      username: userData.userName,
      email: userData.email,
    },
  });
  res.json(upsertUser);
}
