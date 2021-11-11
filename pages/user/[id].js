import { prisma } from 'lib/prisma/client';
import Layout from 'components/layout/Layout';
import Feed from 'components/feed/Feed';
import UserFeed from 'components/feed/UserFeed';

const userPage = ({ user }) => {
  const { posts, firstName, lastName, userName } = user;
  //   console.log(posts);

  return (
    <Layout>
      <div>
        <div>
          {' '}
          <h1 className='text-2xl font-extrabold mb-7'>{userName} Feed</h1>
          <UserFeed feed={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default userPage;

export async function getServerSideProps(context) {
  const user = await prisma.user.findFirst({
    where: {
      id: context.params.id,
    },
    include: {
      posts: {
        include: { author: true },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  return {
    props: { user },
  };
}
