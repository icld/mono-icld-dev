import Image from 'next/image';

const UserAvatar = ({ user }) => {
  const { image, userName, firstName, lastName } = user;
  return (
    <div className='w-full'>
      <span className='self-stretch block w-full h-px bg-gray-200' />

      <div className='flex items-center justify-between w-full h-20 '>
        {image && (
          <div className='flex flex-row align-center'>
            <Image
              src={image}
              alt='user profile image'
              width={36}
              height={36}
              className='rounded-full'
            />
            <div className='ml-3'>
              <div className='h-5 text-sm font-medium text-gray-700 capitalize '>
                {`${firstName} ${lastName}`}
              </div>
              <p className='h-4 text-xs text-gray-500'>{userName}</p>
            </div>
          </div>
        )}
        <button className='w-16  p-0.5 shadow-sm text-sm font-medium border rounded-xl '>
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserAvatar;
