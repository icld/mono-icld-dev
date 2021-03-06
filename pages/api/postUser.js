import { prisma } from 'lib/prisma/client';

export default async function postUser(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const userData = JSON.parse(req.body);

  const savedUser = await prisma.user.create({
    data: userData,
  });
  res.json(savedUser);
}
