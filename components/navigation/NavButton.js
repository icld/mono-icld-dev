import Link from 'next/link';
import { useStore } from 'lib/zustand/store';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const NavButton = ({ item }) => {
  const { sessionUser, setSessionUser } = useStore();
  const router = useRouter();

  async function handleSignOut() {
    await setSessionUser([]);
    await signOut({ callbackUrl: '/login' });
    console.log('signedOUT');
  }

  return (
    <button
      onClick={
        item.name === 'logout'
          ? () => handleSignOut()
          : () => router.push(item.path)
      }
      className={`flex flex-row items-center py-2 pl-2 pr-3 rounded-md  ${
        item.path === router.pathname && 'bg-gray-200'
      }`}
    >
      <span className='mr-3 '>{item?.icon}</span>
      <p className='text-sm font-normal capitalize'>{item?.name}</p>
    </button>
  );
};

export default NavButton;
