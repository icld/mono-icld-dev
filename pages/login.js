import Head from 'next/head';
import { FaTwitter } from 'react-icons/fa';
import LoginButton from 'components/buttons/LoginButton';
import MicrosoftSvg from 'components/buttons/MicrosoftSvg';
import GoogleSvg from 'components/buttons/GoogleSvg';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className='relative flex flex-col items-center justify-center h-screen m-auto'>
      <FaTwitter className='w-12 h-12 text-twitter ' />

      <h1 className='h-10 mt-2 text-2xl font-extrabold text-gray-700'>
        mweeter
      </h1>
      <div className='flex mt-6 space-x-3 '>
        {buttonInfo.map((item, i) => (
          <div
            onClick={() =>
              signIn(`${item.signInId}`, { callbackUrl: '/profile' })
            }
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
  {
    name: 'microsoft',
    text: 'Sign in with Microsoft',
    icon: <MicrosoftSvg />,
    signInId: 'azure-ad',
  },
];
