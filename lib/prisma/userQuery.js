import { PrismaClient } from '@prisma/client';
export const UserQuery = async (id) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};
