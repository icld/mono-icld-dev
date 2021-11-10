import { prisma } from 'lib/prisma/client';

export default async function createPost(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed ' });
  }

  const postData = JSON.parse(req.body);

  const savedPost = await prisma.post.create({
    data: {
      content: postData.content,
      author: { connect: { id: postData.userId } },
    },
  });
  res.json(savedPost);
}
