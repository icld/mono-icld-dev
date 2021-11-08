import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const NavButton = ({ item }) => {
  const router = useRouter();
  return (
    <button
      onClick={
        item.name === 'logout'
          ? () => signOut({ callbackUrl: '/login' })
          : () => router.push(item.path)
      }
      className={`flex flex-row items-center py-2 pl-2 pr-3 rounded-md ${
        item.path === router.pathname && 'bg-gray-200'
      }`}
    >
      <span className='mr-3 '>{item?.icon}</span>
      <p className='text-sm font-normal capitalize'>{item?.name}</p>
    </button>
  );
};

export default NavButton;
