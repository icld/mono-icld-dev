import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import ActiveUser from 'components/users/ActiveUser';
import { useStore } from 'lib/zustand/store';

const prisma = new PrismaClient();

export default function Home({ newActiveUser, session }) {
  const { data: user, status } = useSession();
  const { activeUser, setActiveUser } = useStore();
  const router = useRouter();

  useEffect(() => {
    setActiveUser(newActiveUser);
    console.log(newActiveUser);
  }, []);

  if (typeof window !== 'undefined') return null;

  if (user) {
    return (
      <>
        <Head>
          <title>mweeter</title>
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
    newActiveUser = account;
  }
  console.log(newActiveUser);
  return {
    props: {
      session,
      newActiveUser,
    },
  };
}
