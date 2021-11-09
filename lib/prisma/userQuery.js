export const userQuery = async (loggedInEmail) => {
  const user = await prisma.user.findUnique({
    where: {
      email: loggedInEmail,
    },
  });
  return user;
};
