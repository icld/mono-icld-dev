import { prisma } from 'lib/prisma/client';

export default async function allUsers(req, res) {
  const users = await prisma.user.findMany({
    include: {
      following: true,
      followers: true,
    },
  });
  res.json(users);
}
