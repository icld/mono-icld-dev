import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/react';

import ActiveUser from 'components/users/ActiveUser';

export default function Home() {
  const { data: user, status } = useSession();
  const router = useRouter();

  if (typeof window !== 'undefined') return null;

  if (user) {
    return (
      <>
        <Head>
          <title>mweet</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='relative flex flex-col items-center justify-center h-screen m-auto'>
          {status === 'loading' && <p>loading...</p>}
          {user && <ActiveUser />}
        </div>
      </>
    );
  } else {
    return <div>Access Denied</div>;
  }
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
