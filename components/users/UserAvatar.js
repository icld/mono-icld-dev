import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useStore } from 'lib/zustand/store';
import { follow, unFollow } from 'utils/prismaHelpers';
import Image from 'next/image';

const UserAvatar = ({ user }) => {
  const router = useRouter();
  const [following, setFollowing] = useState();
  const { sessionUser } = useStore();
  const { image, userName, firstName, lastName, id } = user;

  // Check if sessionUser is following this user
  useEffect(() => {
    if (sessionUser && sessionUser.following) {
      setFollowing(sessionUser.following.some((item) => item.id === user.id));
    }
  }, [setFollowing]);
  console.log(
    `${sessionUser.following.some(
      (item) => item.id === user.id
    )}following ${userName}`
  );

  const handleFollow = async () => {
    const data = {
      activeUser: await sessionUser.id,
      id: id,
    };
    try {
      await follow(data);
      !following && setFollowing(true);
      // alert(`Nice! You followed ${userName}`);
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
      following && setFollowing(false);
      // alert(`Nice! You have unFollowed ${userName}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full'>
      <span className='self-stretch block w-full h-px bg-gray-200' />

      <div className='flex items-center justify-between w-full h-20 cursor-pointer '>
        <div
          className='flex flex-row duration-200 align-center hover:scale-125 '
          onClick={() => router.push(`/user/${id}`)}
        >
          <div className='h-9 w-9 '>
            <Image
              src={image || '/rainbow.png'}
              alt='user profile image'
              width={36}
              height={36}
              className='rounded-full'
            />
          </div>

          <div className='ml-3 '>
            <div className='h-5 text-sm font-medium text-gray-700 capitalize '>
              {`${firstName} ${lastName}`}
            </div>
            <p className='h-4 text-xs text-gray-500'>{userName}</p>
          </div>
        </div>

        {/* Follow button  - dynamic based on following state */}
        <button
          className={`w-16  p-0.5 shadow-sm text-sm font-medium border rounded-xl ${
            following ? 'text-white bg-gray-600' : 'text-gray-600 bg-white'
          } `}
          onClick={following ? () => handleUnfollow() : () => handleFollow()}
        >
          {following ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default UserAvatar;
