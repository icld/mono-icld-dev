import { useEffect } from 'react';
import { getSession } from 'next-auth/react';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useStore } from 'lib/zustand/store';

async function updateUser(formData) {
  const response = await fetch('/api/updateUser', {
    method: 'PUT',
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

const Profile = ({ user }) => {
  const router = useRouter();
  const { sessionUser } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { firstName, lastName, userName, email, id, image } = sessionUser;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await updateUser(data);
      alert('success');
      reset();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const nameFieldStyle =
    'flex flex-row items-center px-3.5 py-2.5 w-72 border shadow-sm border-gray-300 rounded-md text-sm text-gray-500  ';

  const fieldStyle =
    'flex flex-row items-center px-3.5 py-2.5 w-96 border shadow-sm border-gray-300 rounded-md text-sm text-gray-500';

  const labelStyle = 'mb-1 text-sm font-medium text-gray-700';

  return (
    <div className='absolute w-full h-full'>
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
                placeholder={firstName}
                {...register('firstName', { required: true, maxLength: 80 })}
                className={`${nameFieldStyle}`}
                defaultValue={firstName}
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
                defaultValue={lastName}
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
              defaultValue={userName}
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
              defaultValue={email}
            />
          </div>

          <input
            type='hidden'
            {...register('image', { required: true })}
            className={`${fieldStyle} 'sr-only'`}
            hidden
            value={image}
          />
          <input
            type='hidden'
            {...register('id', { required: true })}
            className={`${fieldStyle} 'sr-only'`}
            hidden
            value={id}
          />

          <button
            type='submit'
            className='py-2.5 px-5 w-36  h-11 text-sm font-medium text-white bg-purple-700 hover:bg-purple-500 rounded-md'
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
