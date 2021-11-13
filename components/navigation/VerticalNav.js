import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useStore } from 'lib/zustand/store';
import HomeIcon from './icons/HomeIcon';
import FollowingIcon from './icons/FollowingIcon';
import ProfileIcon from './icons/ProfileIcon';
import LogoutIcon from './icons/LogoutIcon';
import NavButton from './NavButton';
import ActiveUser from 'components/users/ActiveUser';

const VerticalNav = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { sessionUser } = useStore();

  return (
    <div
      className={`  fixed  lg:relative  h-screen transition-all duration-200 top-0 left-0 z-10 flex flex-col items-start  ${
        showNav ? 'w-64' : 'w-2'
      }  lg:w-64   h-full bg-gray-100 shadow-sm `}
    >
      <button
        className={`absolute z-20 m-3 p-1 text-3xl text-gray-700 bg-white  hover:text-gray-500   rounded-md bg-opacity-30 lg:hidden   ${
          showNav && 'translate-x-52 bg-opacity-0  '
        } `}
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div
        className={` ${
          showNav ? 'block' : 'hidden'
        }  sticky top-0   self-stretch flex-grow-0 m-0 lg:block  `}
      >
        <h1 className='m-5 font-sans text-2xl font-semibold text-twitter'>
          mweeter
        </h1>

        {/* Nav */}
        <div className='flex flex-col mx-5 mb-5 space-y-2'>
          {navItems.map((item, i) => (
            <NavButton key={`nav-item-${i}`} item={item} />
          ))}
          <span className='self-stretch block h-px bg-gray-200' />
          <ActiveUser user={sessionUser} />
        </div>
      </div>
    </div>
  );
};

const navItems = [
  { name: 'home', path: '/', icon: <HomeIcon /> },
  { name: 'following', path: '/following', icon: <FollowingIcon /> },
  { name: 'your profile', path: '/profile', icon: <ProfileIcon /> },
  { name: 'logout', path: '/logout', icon: <LogoutIcon /> },
];

export default VerticalNav;
