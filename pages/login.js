import Head from 'next/head';
import { FaTwitter } from 'react-icons/fa';
import LoginButton from 'components/buttons/LoginButton';
import MicrosoftSvg from 'components/buttons/MicrosoftSvg';
import GoogleSvg from 'components/buttons/GoogleSvg';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
import { useStore } from 'lib/zustand/store';

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

export default function Home() {
  const { sessionUser } = useStore();
  const { data: session, status } = useSession();

  return (
    <div className='relative flex flex-col items-center justify-center h-screen m-auto'>
      <FaTwitter className='w-12 h-12 text-twitter ' />

      <h1 className='h-10 mt-2 text-2xl font-extrabold text-gray-700'>
        mweeter
      </h1>
      <div className='flex flex-col items-center justify-center mt-6 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row '>
        {buttonInfo.map((item, i) => (
          <div
            onClick={() => signIn(`${item.signInId}`, { callbackUrl: '/' })}
            key={`login-button-${i}`}
          >
            <LoginButton text={item.text} icon={item.icon} />
          </div>
        ))}
      </div>
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

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
