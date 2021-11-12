import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/react';
import { prisma } from 'lib/prisma/client';
import { useStore } from 'lib/zustand/store';
import useSWR, { SWRConfig } from 'swr';

import PostForm from 'components/feed/PostForm';
import UserFeed from 'components/feed/Feed';
import FollowOthers from 'components/users/FollowOthers';
import Layout from 'components/layout/Layout';
import { fetcher } from 'lib/swr/fetcher';
import LoadingAnimation from 'components/navigation/LoadingAnimation';

export default function Home({ newActiveUser, session, feed }) {
  const { data: user, status } = useSession();
  const { sessionUser, setSessionUser, submitted, setSubmitted } = useStore();
  const [feedData, setFeedData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setSessionUser(newActiveUser);
    // setSubmitted(false);
  }, []);

  useEffect(() => {
    mutate();
    setSubmitted(false);
  }, [submitted]);

  const { data, error, mutate } = useSWR('/api/feed', fetcher);

  if (user) {
    return (
      <Layout>
        {/* feed */}
        <div className='lg:w-7/12'>
          <h1 className='text-2xl font-extrabold mb-7'>Your Feed</h1>
          <PostForm />

          <SWRConfig value={{ feed }}>
            {!data ? <LoadingAnimation /> : <UserFeed feed={data} />}
          </SWRConfig>

          {status === 'loading' && <p>loading...</p>}
        </div>

        {/* follow others */}
        <div className='lg:w-4/12'>
          <FollowOthers id={sessionUser?.id} />
        </div>
      </Layout>
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
    include: {
      following: true,
      followers: true,
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
  return {
    props: {
      session,
      newActiveUser,
      feed,
    },
  };
}
