import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaTwitter } from 'react-icons/fa';
import LoginButton from 'components/buttons/LoginButton';
import MicrosoftSvg from 'components/buttons/MicrosoftSvg';
import GoogleSvg from 'components/buttons/GoogleSvg';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
import { useStore } from 'lib/zustand/store';
import Feed from 'components/feed/Feed';
import UserFeed from 'components/feed/UserFeed';
import { prisma } from 'lib/prisma/client';

async function updateUser(userData) {
  const response = await fetch('/api/updateUser', {
    method: 'PUT',
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function Home({ feed }) {
  const [showLogin, setShowLogin] = useState(false);
  const { sessionUser } = useStore();
  const { data: session, status } = useSession();

  console.log(feed);

  useEffect(() => {
    setShowLogin(false);
  }, []);

  return (
    <div className='relative flex flex-col items-center justify-center h-screen py-8 m-auto bg-gray-50'>
      <div
        className='flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:scale-150'
        onClick={() => setShowLogin(!showLogin)}
      >
        <FaTwitter className='w-12 h-12 text-twitter ' />

        <h1 className='h-10 mt-2 text-2xl font-extrabold text-gray-700 '>
          mweeter
        </h1>
      </div>
      <div
        className={`w-10/12 mt-6 md:w-1/3  overflow-scroll  transition-all transform  duration-300   ${
          showLogin ? 'h-0' : 'h-96'
        }`}
      >
        <UserFeed feed={feed} />
      </div>

      <div
        className={`flex flex-col items-center justify-center mt-6 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row ${
          showLogin ? 'block' : 'hidden'
        }  `}
      >
        {buttonInfo.map((item, i) => (
          <div
            onClick={() => signIn(`${item.signInId}`, { callbackUrl: '/' })}
            key={`login-button-${i}`}
          >
            <LoginButton text={item.text} icon={item.icon} />
          </div>
        ))}
      </div>
      <button
        className={` font-semibold  mt-6 text-gray-700 transition-all duration-200 ${
          showLogin && 'hidden'
        } hover:text-gray-400 `}
        onClick={() => setShowLogin(!showLogin)}
      >
        LOGIN
      </button>
    </div>
  );
}

const buttonInfo = [
  {
    name: 'google',
    text: 'Sign in with Google',
    icon: <GoogleSvg />,
    signInId: 'google',
  },
  // {
  //   name: 'microsoft',
  //   text: 'Sign in with Microsoft',
  //   icon: <MicrosoftSvg />,
  //   signInId: 'azure-ad',
  // },
  // {
  //   name: 'github',
  //   text: 'Sign in with Github',
  //   icon: <MicrosoftSvg />,
  //   signInId: 'github',
  // },
];

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const feed = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { feed },
  };
}
