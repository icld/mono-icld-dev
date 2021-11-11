import { prisma } from 'lib/prisma/client';
import { getSession } from 'next-auth/react';

export default async function following(req, res) {
  const session = await getSession({ req });

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  console.log(session);
  const currentUserId = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  });

  const users = await prisma.user.findMany({
    where: {
      id: currentUserId.id,
    },
    select: {
      following: true,
    },
  });
  res.json(users);
}
