import { prisma } from 'lib/prisma/client';

export default async function getFeed(req, res) {
  const page = (await req.query.page) || 0;
  const skip = page === 1 ? 6 : page * 6;

  const posts = await prisma.post.findMany({
    skip: skip,
    take: 6,
    orderBy: { createdAt: 'desc' },
    include: { author: true },
  });
  res.json(posts);
}
