import { prisma } from 'lib/prisma/client';

export default async function createPost(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const postData = JSON.parse(req.body);

  const { userId, content } = postData;

  const savedPost = await prisma.post.create({
    data: {
      content: content,
      author: { connect: { id: userId } },
    },
  });
  res.json(savedPost);
}
