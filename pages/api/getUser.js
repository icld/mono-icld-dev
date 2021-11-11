import { prisma } from 'lib/prisma/client';

export default async function getUser(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const postId = req.query.id;

  const user = await prisma.user.findUnique({
    where: {
      id: postId,
    },
  });
  res.json(user);
}
