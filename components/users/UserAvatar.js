import { useState, useEffect } from 'react';
import { useStore } from 'lib/zustand/store';
import { follow, unFollow } from 'utils/prismaHelpers';
import Image from 'next/image';

const UserAvatar = ({ user }) => {
  const [following, setFollowing] = useState(false);
  const { sessionUser } = useStore();
  const { image, userName, firstName, lastName, id } = user;

  // Check if sessionUser is following this user
  useEffect(() => {
    setFollowing(sessionUser.following.some((item) => item.id === user.id));
  }, [setFollowing]);

  const handleFollow = async () => {
    const data = {
      activeUser: await sessionUser.id,
      id: id,
    };
    try {
      await follow(data);
      setFollowing(true);
      alert(`Nice! You followed ${userName}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollow = async () => {
    const data = {
      activeUser: await sessionUser.id,
      id: id,
    };
    try {
      await unFollow(data);
      setFollowing(false);
      alert(`Nice! You have unFollowed ${userName}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full'>
      <span className='self-stretch block w-full h-px bg-gray-200' />

      <div className='flex items-center justify-between w-full h-20 '>
        <div className='flex flex-row align-center'>
          <div className='h-9 w-9'>
            <Image
              src={image || '/rainbow.png'}
              alt='user profile image'
              width={36}
              height={36}
              className='rounded-full'
            />
          </div>

          <div className='ml-3'>
            <div className='h-5 text-sm font-medium text-gray-700 capitalize '>
              {`${firstName} ${lastName}`}
            </div>
            <p className='h-4 text-xs text-gray-500'>{userName}</p>
          </div>
        </div>

        {/* Follow button  - dynamic based on following state */}
        <button
          className='w-16  p-0.5 shadow-sm text-sm font-medium border rounded-xl '
          onClick={following ? () => handleUnfollow() : () => handleFollow()}
        >
          {following ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default UserAvatar;
