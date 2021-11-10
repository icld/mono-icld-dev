import { prisma } from 'lib/prisma/client';

export default async function getFeed(req, res) {
  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: 'desc' },
  });
  res.json(posts);
}
