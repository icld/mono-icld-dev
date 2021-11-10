import Image from 'next/image';

const UserAvatar = ({ user }) => {
  console.log(user);
  const { image, userName, firstName, lastName } = user;
  return (
    <div>
      <div className='mt-4 ml-4'>
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
              <div className='h-5 text-sm font-medium text-gray-700 capitalize'>
                <span>{firstName}</span> <span>{lastName}</span>
              </div>
              <p className='h-4 text-xs text-gray-500'>{userName}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
