import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const ActiveUser = () => {
  const { data: user, status } = useSession();
  console.log(user);
  return (
    <>
      {status === 'loading' ? (
        <p>loading</p>
      ) : (
        <div className='relative'>
          <p>{user.user.name}</p>
          <Image
            src={user.user.image}
            alt='user profile image'
            width={12}
            height={12}
          />
        </div>
      )}
    </>
  );
};

export default ActiveUser;
