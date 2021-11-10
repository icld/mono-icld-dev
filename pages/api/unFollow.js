import { prisma } from 'lib/prisma/client';

export default async function follow(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const data = JSON.parse(req.body);

  const follow = await prisma.user.update({
    where: {
      id: data.activeUser,
    },
    data: {
      following: { disconnect: { id: data.id } },
    },
  });
  res.json(follow);
}
