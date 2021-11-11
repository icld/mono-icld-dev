import { useState, useEffect } from 'react';
import { useStore } from 'lib/zustand/store';
import { useForm } from 'react-hook-form';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { DevTool } from '@hookform/devtools';

async function createPost(formData) {
  const response = await fetch('/api/createPost', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

const PostForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { sessionUser } = useStore();

  useEffect(() => {
    setSubmitted(false);
  }, [setSubmitted]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await createPost(data);
      confetti({
        particleCount: 1000,
        startVelocity: 30,
        spread: 180,
      });
      setSubmitted(true);
      alert('success');
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mb-9'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <input
          hidden
          type='text'
          placeholder='userId'
          {...register('userId', { required: true })}
          value={sessionUser?.id}
        />
        <label htmlFor='content' className='sr-only'>
          content
        </label>
        <textarea
          placeholder="What's on your mind..."
          type='text'
          {...register('content', { required: true, min: 1, maxLength: 280 })}
          className='border border-gray-200 rounded-md py-2  px-3.5   h-20  mb-4'
        />

        <button
          type='submit'
          className='py-2.5 px-5 w-36  h-11 text-sm font-medium text-white  bg-submitButton hover:bg-purple-500 rounded-md self-end'
        >
          Send Mweet
        </button>
      </form>
      {process.env.NODE_ENV !== 'production' && <DevTool control={control} />}
    </div>
  );
};

export default PostForm;
