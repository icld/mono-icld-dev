import { prisma } from 'lib/prisma/client';

export default async function getFeed(req, res) {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: { author: true },
  });
  res.json(posts);
}
