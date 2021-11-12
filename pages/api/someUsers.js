import { prisma } from 'lib/prisma/client';
import { getSession } from 'next-auth/react';

export default async function someUsers(req, res) {
  const session = await getSession({ req });

  const currentUserId = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  });

  const page = (await req.query.page) || 0;
  const skip = page === 0 ? 8 : page * 8;
  const users = await prisma.user.findMany({
    skip: skip,
    take: 7,
    where: {
      followers: {
        none: {
          id: {
            contains: currentUserId.id,
          },
        },
      },
    },
    include: {
      following: true,
      followers: true,
    },
  });
  res.json(users);
}
