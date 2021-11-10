import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/react';
import { prisma } from 'lib/prisma/client';
import { useStore } from 'lib/zustand/store';
import PostForm from 'components/feed/PostForm';
import Feed from 'components/feed/Feed';
import VerticalNav from 'components/navigation/VerticalNav';
import FollowOthers from 'components/users/FollowOthers';

export default function Home({ newActiveUser, session, feed }) {
  const { data: user, status } = useSession();
  const { sessionUser, setSessionUser } = useStore();
  const router = useRouter();
  console.log(feed);

  useEffect(() => {
    const x = newActiveUser;
    setSessionUser(newActiveUser);
  }, []);

  if (user) {
    return (
      <>
        <Head>
          <title>mweeter</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='relative flex flex-col w-full h-full m-auto '>
          <div className='flex flex-row w-full m-auto'>
            <div>
              <VerticalNav />
            </div>
            <main className='flex flex-row justify-between w-full mx-12 mt-11'>
              {/* feed */}
              <div className='w-8/12'>
                <h1 className='text-2xl font-extrabold mb-7'>Your Feed</h1>
                <PostForm />

                <Feed feed={feed} />

                {status === 'loading' && <p>loading...</p>}
              </div>

              {/* follow others */}
              <div className='w-3/12'>
                <FollowOthers id={sessionUser?.id} />
              </div>
            </main>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Access Denied</div>;
  }
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const feedReq = await fetch(`${process.env.NEXTAUTH_URL}/api/feed`);
  const feed = await feedReq.json();

  const account = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  let newActiveUser;

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  if (!account) {
    const { name, image, email } = session.user;
    const fullName = name.split(' ');
    const firstName = fullName[0];
    const lastName = fullName[fullName.length - 1];
    const handle = `@${firstName[0]}${lastName}`;
    newActiveUser = await prisma.user.create({
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        image: image,
        userName: handle,
      },
    });
  } else {
    newActiveUser = await account;
  }
  console.log(newActiveUser);
  return {
    props: {
      session,
      newActiveUser,
      feed,
    },
  };
}
