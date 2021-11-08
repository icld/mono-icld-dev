import { getSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function saveUser(userData) {
  const response = await fetch('/api/postUser', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

const Profile = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { name, image, email } = user;
  const fullName = name.split(' ');
  const firstName = fullName[0];
  const lastName = fullName[fullName.length - 1];
  const handle = `@${firstName[0]}${lastName}`;

  const onSubmit = async (data) => {
    try {
      // await saveUser(data);
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);

  const nameFieldStyle =
    'flex flex-row items-center px-3.5 py-2.5 w-72 border shadow-sm border-gray-300 rounded-md text-sm text-gray-500  ';

  const fieldStyle =
    'flex flex-row items-center px-3.5 py-2.5 w-96 border shadow-sm border-gray-300 rounded-md text-sm text-gray-500';

  const labelStyle = 'mb-1 text-sm font-medium text-gray-700';

  return (
    <div className='absolute w-full h-screen'>
      <div className='relative font-normal left-80 mt-11'>
        <h1 className='text-2xl font-extrabold mb-7'>Your Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)} className=''>
          {/* Name fields in row */}
          <div className='flex flex-row mb-6 space-x-5'>
            <div>
              <label htmlFor='firstName' className={labelStyle}>
                First Name
              </label>
              <input
                type='text'
                placeholder='First name'
                {...register('firstName', { required: true, maxLength: 80 })}
                className={`${nameFieldStyle}`}
                value={firstName}
              />
            </div>
            <div>
              <label className={labelStyle} htmlFor='lastName'>
                Last Name
              </label>
              <input
                type='text'
                placeholder='Last name'
                {...register('lastName', { required: true, maxLength: 100 })}
                className={`${nameFieldStyle}`}
                value={lastName}
              />
            </div>
          </div>

          <div className='mb-5'>
            <label htmlFor='userName' className={labelStyle}>
              Your Handle (username)
            </label>
            <input
              type='text'
              placeholder='Your Handle'
              {...register('userName', { required: true, maxLength: 100 })}
              className={`${fieldStyle}`}
              value={handle}
            />
          </div>

          <div className='mb-7'>
            <label htmlFor='email' className={labelStyle}>
              Email Address
            </label>
            <input
              type='text'
              placeholder='Email'
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className={`${fieldStyle}`}
              value={email}
            />
          </div>

          <input
            type='hidden'
            {...register('image', { required: true })}
            className={`${fieldStyle} 'sr-only'`}
            hidden
            value={image}
          />

          <button
            type='submit'
            className='py-2.5 px-5 w-36  h-11 text-sm font-medium text-white bg-purple-700 rounded-md'
          >
            Update info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const users = await prisma.user.findMany();
  console.log(users);
  console.log(session.user);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}
