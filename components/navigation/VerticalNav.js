import { useRouter } from 'next/router';
import Link from 'next/link';

import HomeIcon from './icons/HomeIcon';
import FollowingIcon from './icons/FollowingIcon';
import ProfileIcon from './icons/ProfileIcon';
import LogoutIcon from './icons/LogoutIcon';
import NavButton from './NavButton';

const VerticalNav = () => {
  const router = useRouter();

  return (
    <div className='absolute top-0 left-0 flex flex-col items-start w-64 h-screen bg-gray-100 shadow-md '>
      <div className='self-stretch flex-grow-0 m-0'>
        <h1 className='font-sans text-2xl font-semibold left-2.5 m-  text-twitter m-5'>
          mweeter
        </h1>

        {/* Nav */}
        <div className='flex flex-col mx-5 space-y-2'>
          {navItems.map((item, i) => (
            <NavButton key={`nav-item-${i}`} item={item} />
          ))}
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
