import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getUser(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const userId = JSON.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  res.json(user);
}
